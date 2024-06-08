import styles from './Navbar.module.scss'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import useModal from '../hooks/useModal'
export default function Navbar() {
  const { openModalWithDefaultText } = useModal()
  return (
    <header className={styles['wrapper']}>
      <nav className="container">
        <div className={styles['left']}>
          <h1 className={styles['logo']}>
            <img src={logo} alt="" />
          </h1>
          <div className={styles['links']}>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/">
              推荐
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/rankList">
              排行榜
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/singerList">
              歌手
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/playList">
              歌单
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/mvList">
              MV
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/ai">
              智能推荐
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to="/view">
              音乐可视化
            </NavLink>
          </div>
        </div>
        <div className={styles['right']}>
          <SearchBar />
          <Link onClick={openModalWithDefaultText} className={styles['login']} to=".">
            登录/注册
          </Link>
        </div>
      </nav>
    </header>
  )
}
