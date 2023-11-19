import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './Context'

const Sidebar = () => {
  const { sidebarShown, hideSidebar } = useGlobalContext()

  return (
    <aside className={`${sidebarShown ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={hideSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {
          links.map(({ id, url, icon, text }) => {
            return <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          })
        }
      </ul>
      <ul className="social-icons">
        {
          social.map(({ id, url, icon }) => {
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar
