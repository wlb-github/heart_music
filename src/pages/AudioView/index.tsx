import React, { useState, useEffect, useRef, useCallback } from 'react'
import anime from 'animejs'
import styles from './index.module.scss'

// 新的颜色生成函数
function generateRainbowColor(index: number, total: number): string {
  const hue = (index / total) * 360
  return `hsl(${hue}, 100%, 50%)`
}

const MusicPlayer: React.FC = () => {
  const [fileList, setFileList] = useState<{ num: number; file: File }[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentFile, setCurrentFile] = useState<File | null>(null)
  const [playbackTime, setPlaybackTime] = useState(0)
  const audioCtx = useRef(new window.AudioContext())
  const audioBufferSourceNode = useRef<null | AudioBufferSourceNode>(null)
  const analyser = useRef(audioCtx.current.createAnalyser())
  const stageDivRef = useRef<HTMLDivElement>(null)
  const startTime = useRef(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const initDiv = useCallback((num: number, r: number) => {
    const winWidth = document.documentElement.clientWidth
    const winHeight = document.documentElement.clientHeight
    const avd = 360 / num
    const ahd = (avd * Math.PI) / 180
    const stageDivEl = stageDivRef.current

    if (stageDivEl) {
      // 清除现有的 div 元素
      while (stageDivEl.firstChild) {
        stageDivEl.removeChild(stageDivEl.firstChild)
      }

      for (let i = 0; i < num; i++) {
        const divEl = document.createElement('div')
        const color = generateRainbowColor(i, num) // 使用新的颜色生成函数
        divEl.setAttribute('style', `background-color: ${color}; box-shadow: 0px 0px 10px ${color}`)
        divEl.classList.add(styles.el)
        stageDivEl.append(divEl)
        anime({
          targets: divEl,
          translateX: [winWidth / 2, winWidth / 2 + Math.sin(ahd * i) * r],
          translateY: [winHeight / 2, winHeight / 2 + Math.cos(ahd * i) * r - 100],
          rotate: [-(avd * i)],
          loop: false,
          duration: 1,
        })
      }
    }
  }, [])

  useEffect(() => {
    initDiv(60, 100)
    const handleResize = () => {
      initDiv(60, 100)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [initDiv])

  const loadFile = (files: FileList) => {
    const file = files[0]
    if (!file || fileList.some((f) => f.file.name === file.name)) return
    setFileList((prevList) => [...prevList, { num: prevList.length + 1, file }])
  }

  const play = (file: File) => {
    if (isPlaying && currentFile === file) {
      pause()
      return
    }

    if (currentFile !== file) {
      setPlaybackTime(0)
    }

    const fr = new FileReader()
    fr.onload = (e) => {
      audioCtx.current.decodeAudioData(e.target?.result as ArrayBuffer).then((buffer) => {
        if (audioBufferSourceNode.current != null) {
          audioBufferSourceNode.current.stop()
        }
        audioBufferSourceNode.current = audioCtx.current.createBufferSource()
        audioBufferSourceNode.current.buffer = buffer
        audioBufferSourceNode.current.connect(audioCtx.current.destination)
        audioBufferSourceNode.current.connect(analyser.current)
        audioBufferSourceNode.current.loop = true
        startTime.current = audioCtx.current.currentTime - playbackTime
        audioBufferSourceNode.current.start(0, playbackTime)
        setIsPlaying(true)
        setCurrentFile(file)
      })
      getMusicData()
    }
    fr.readAsArrayBuffer(file)
  }

  const pause = () => {
    if (audioBufferSourceNode.current) {
      audioBufferSourceNode.current.stop()
      setPlaybackTime(audioCtx.current.currentTime - startTime.current)
      audioBufferSourceNode.current = null
      setIsPlaying(false)
    }
  }

  const remove = (file: File) => {
    setFileList((prevList) => prevList.filter((f) => f.file.name !== file.name))
    if (currentFile && currentFile.name === file.name) {
      pause()
      setPlaybackTime(0)
      setCurrentFile(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '' // 重置文件选择输入，以便可以再次选择同一个文件
    }
  }

  const getMusicData = () => {
    requestAnimationFrame(getMusicData)
    const audioInfoArray = new Uint8Array(analyser.current.frequencyBinCount)
    analyser.current.getByteFrequencyData(audioInfoArray)
    animeDiv(audioInfoArray)
  }

  const animeDiv = (audioInfoArray: Uint8Array) => {
    const stageDivEl = stageDivRef.current
    for (let i = 0; i < stageDivEl!.children.length; i++) {
      if (audioInfoArray[i] === 0) {
        audioInfoArray[i] = 4
      }
      anime({
        targets: stageDivEl?.children[i],
        height: [audioInfoArray[i] / 2],
        duration: 1,
      })
    }
  }

  return (
    <main className={styles['music-player']}>
      <div className={styles['input_box']}>
        <span className={styles['play_song']}>选择歌曲</span>
        <input type="file" className={styles['loadFile']} onChange={(e) => loadFile(e.target.files as FileList)} ref={fileInputRef} />
      </div>
      <div className={styles['stage']} ref={stageDivRef}></div>
      <ul className={styles['fileList']}>
        {fileList.map((fileObj) => (
          <li key={fileObj.num}>
            <span className={styles['num']}>{fileObj.num}</span>
            <span className={styles['song']}>{fileObj.file.name}</span>
            <button onClick={() => play(fileObj.file)}>{isPlaying && currentFile === fileObj.file ? '暂停' : '播放'}</button>
            <button onClick={() => remove(fileObj.file)}>移除</button>
          </li>
        ))}
      </ul>
      <div className={styles['box']}></div>
    </main>
  )
}

export default MusicPlayer
