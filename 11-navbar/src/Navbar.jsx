import React, { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [, setHidden] = useState(true)
  const linksContainer = useRef(null)
  const linksRef = useRef(null)

  const handleToggle = () => {
    setHidden(val => {
      if (val) {
        const height = linksRef.current.getBoundingClientRect().height
        linksContainer.current.style.height = `${height}px`
      } else {
        linksContainer.current.style.height = "0px"
      }
      return !val
    })
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={handleToggle}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linksRef}>
            {
              links.map(({ id, text }) => {
                return <li key={id}>
                  <a href="#">{text}</a>
                </li>
              })
            }
          </ul>
        </div>
        <ul className="social-icons">
          {
            social.map(({ id, icon, url }) => {
              return <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
