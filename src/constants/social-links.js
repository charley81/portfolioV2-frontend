import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import uniqid from 'uniqid'

const data = [
  {
    id: uniqid(),
    icon: <FaGithub className="social-icon" />,
    url: 'https://github.com/',
  },
  {
    id: uniqid(),
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://linkedin.com/',
  },
  {
    id: uniqid(),
    icon: <FaTwitter className="social-icon" />,
    url: 'https://twitter.com/',
  },
]

export default data
