import React from 'react'
import { GiSprint } from 'react-icons/gi'
import { AiOutlineFileSearch, AiFillLock } from 'react-icons/ai'
import uniqid from 'uniqid'

export default [
  {
    id: uniqid(),
    title: 'Blazing Fast',
    text:
      'Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build. With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.',
  },
  {
    id: uniqid(),
    title: 'Highly Secure',
    text:
      'The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack. Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.',
  },
  {
    id: uniqid(),
    title: 'Scalable',
    text:
      'Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when. With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.',
  },
]
