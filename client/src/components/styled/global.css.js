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

  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #525252;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
