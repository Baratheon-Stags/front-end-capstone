import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    margin-top: 0;
    color: ${(props) => (props.darkMode ? '#f5f5f5' : '#100')};
    font-family: 'Bebas Neue', cursive;
  }

  h1 {
    font-size: 3rem;
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
    color: rgb(70,130,180);
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
    opacity: 80%;
  }

  .section-header {
    display: inline-block;
    text-align: center;
    position: relative;
    width: 100%;
    text-shadow: 1px 1px 1px rgba(0,0,0,.45);
    margin: 1em auto;
  }

  .section-header::before,
  .section-header::after {
    content: '';
    height: 2px;
    background-color: black;
    width: 250px;
    position: absolute;
    top: 50%;
    display: inline-block;
  }

  .section-header::before {
    left: 23.5%;
  }

  .section-header::after {
    right: 23.5%;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  select {
    font-family: 'Poppins', sans-serif;
  }
`;
