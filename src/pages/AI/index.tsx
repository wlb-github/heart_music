import { memo } from 'react'
import styles from './index.module.scss'

const Ai = memo(() => {
  return (
    <div className={`${styles.AiWrapper} w980`}>
      <iframe
        title="ai"
        className={`${styles.boxIframe} custom-scrollbar`}
        src="https://udify.app/chatbot/ZqpXU3hyv7xLlWit"
        // frameBorder="0"
        allow="microphone"
      ></iframe>
    </div>
  )
})

export default Ai
