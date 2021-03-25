import React from 'react'
import { FaTimes } from 'react-icons/fa'
import links from '../constants/links'
import socialLinks from '../constants/social-links'
import { Link } from 'gatsby'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        {/* nav-links */}
        <ul className="sidebar-links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        {/* social-links */}
        <ul className="sidebar-icons">
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
