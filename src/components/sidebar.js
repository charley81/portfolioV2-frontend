import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { css } from '@emotion/react'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button>
        <FaTimes onClick={toggleSidebar} />
      </button>
      <div className="side-container">
        <h1>hello</h1>
      </div>
    </aside>
  )
}

export default Sidebar
