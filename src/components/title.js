import React from 'react'
import { css } from '@emotion/react'

const Title = ({ title }) => {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: 2rem;
      `}
    >
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
