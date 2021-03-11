import React from 'react'
import { css } from '@emotion/react'

const Title = ({ title }) => {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: 4rem;

        h2 {
          margin-bottom: 1rem;
        }
      `}
    >
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
