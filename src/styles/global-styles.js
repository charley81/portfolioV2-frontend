import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --maxWidth: 1100px;
    --mainFont: 'Montserrat', sans-serif;
    --handwriting: 'Architects Daughter', cursive;
    --borderRadius: 3px;
    --transition: all 0.3s ease;
    --maxWidth: 1100px;
    --boxShadowLight: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    --boxShadowDark: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    --primaryColor: #371bb1;
    --secondaryColor: #05f4b7;
    --lightColor: #f3f3f3;
    --darkColor: #12151f;
  }

  /* Global Styles */
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
    font-family: var(--handwriting);
    text-transform: uppercase;
  }

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1100px) {
    h1 {
      font-size: 6rem;
    }
  }

  /* Btn  */
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

  /* Section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--maxWidth);
  }

  /* Utility Classes */
  .underline {
    width: 15rem;
    height: 0.25rem;
    background: var(--primaryColor);
    margin: 0 auto 1.25rem;
  }

  .active {
    border-bottom: 0.5rem solid var(--secondaryColor);
  }

  /* Sidebar */
  .sidebar {
    background: var(--lightColor);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  .sidebar-links li {
    opacity: 0;
  }

  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--darkColor);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    border: 1px solid transparent;
  }

  .sidebar-links li a:hover {
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
  }

  .sidebar-icons {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;

    a {
      color: var(--secondaryColor);
      margin-right: 2rem;
      font-size: 2rem;
      padding: 0.75rem;
      background: var(--primaryColor);
      border-radius: 50%;
      display: flex;
      align-items: center;
      transition: var(--transition);

      &:hover {
        background: var(--secondaryColor);
        color: var(--primaryColor);
      }
    }
  }

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--primaryColor);
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }

  /* Sidebar Animation */
  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }

  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }

  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }

  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }

  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }

  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }

  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }

  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }

  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }

  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }

  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default globalStyles
