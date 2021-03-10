import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --maxWidth: 1100px;
    --mainFont: 'Montserrat', sans-serif;
    --handwriting: 'Allura', cursive;
    --borderRadius: 3px;
    --transition: all 0.3s ease;
    --maxWidth: 1100px;
    --primaryColor: #371bb1;
    --secondaryColor: #05f4b7;
    --lightColor: #f3f3f3;
    --darkColor: #12151f;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--lightColor);
    color: var(--darkColor);
    font-family: var(--mainFont);
    line-height: 1.5;
    font-size: 16px;
    letter-spacing: 2px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  ${'' /* global classes */}

  .btn {
    background: var(--primaryColor);
    color: var(--lightColor);
    padding: 0.5rem 1rem;
    display: inline-block;
    transition: var(--transition);
    font-size: 1rem;
    border-radius: var(--borderRadius);
    cursor: pointer;
    box-shadow: 0 1p 3px rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;

    &:hover {
      background: var(--lightColor);
      color: var(--primaryColor);
      border: 1px solid var(--primaryColor);
    }
  }

  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }

  ${'' /* section */}
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--maxWidth);
  }

  ${'' /* titles */}
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primaryColor);
    margin: 0 auto 1.25rem;
  }

  .section-title {
    margin-bottom: 4rem;
    text-align: center;
  }

  ${'' /* social links */}
  .social-links {
    font-size: 1.75rem;
    color: var(--darkColor);
    transition: var(--transition);

    &:hover {
      color: var(--colorPrimary);
    }
  }
`

export default globalStyles
