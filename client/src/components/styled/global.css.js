import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 20px;
    line-height: 1.35;
    background-color: ${(props) => (props.darkMode ? '#292A30' : '#f5f5f5')};
    color: ${(props) => (props.darkMode ? '#f5f5f5' : '#333333')};
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: ${(props) => (props.darkMode ? '#f5f5f5' : '#100')};
    font-family: 'Bebas Neue', cursive;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    position: relative;
  }

  h2 span {
    position: absolute;
    top: -90px;
  }

  @media (max-height: 1100px) {
    h1 {
      font-size: 2.5rem;
    }

    .description-container {
      justify-content: center;
    }
  }

  a:hover,
  button:hover {
    cursor: pointer;
  }

  a:focus,
  button:focus {
    outline: 1px solid blue;
  }

  img {
    width: 100%;
  }

  .star-icon {
    width: 20px;
    color: black;
    margin: 0 -1px;
  }

  .star-icon.filled {
    color: rgba(0,0,0,.75);
  }

  .text-center {
    text-align:center;
  }

  .social-icon {
    transition: all .2s ease;
  }

  .social-icon:hover {
    cursor:pointer;
    color: black;
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 60%;
  }

  .section-header {
    text-align: center;
    margin: 0 auto;

    & > h2 {
      margin: 0;
      position: relative;
    }

    & > h2::before,
    & > h2::after {
      content: '';
      height: 2px;
      width: 200px;
      position: absolute;
      background-color: black;
      top: 50%;
      display: inline-block;
    }

    & > h2::before {
      left: -10%;
      transform: translateX(-100%);
    }

    & > h2::after {
      right: -10%;
      transform: translateX(100%);
    }
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  select {
    font-family: 'Poppins', sans-serif;
  }
`;
