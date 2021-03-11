import React from 'react'
import { Link } from 'gatsby'
import uniqid from 'uniqid'

const data = [
  {
    id: uniqid(),
    text: 'home',
    url: '/',
  },
  {
    id: uniqid(),
    text: 'about',
    url: '/about/',
  },
  {
    id: uniqid(),
    text: 'projects',
    url: '/projects/',
  },
  {
    id: uniqid(),
    text: 'blog',
    url: '/blog/',
  },
  {
    id: uniqid(),
    text: 'contact',
    url: '/contact/',
  },
]

export default data
