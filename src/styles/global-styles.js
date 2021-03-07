import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --borderRadius: 3px;
    --transition: all 0.3s ease;
    --maxWidth: 1100px;
    --primaryColor: #3c1874;
    --secondaryColor: #de354c;
    --lightColor: #f3f3f3;
    --darkColor: #283747;
  }

  body {
    background-color: var(--lightColor);
    color: var(--primaryColor);
  }
`

export default globalStyles
