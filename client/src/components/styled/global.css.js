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
    opacity: 75%;
    width: 20px;
    color: red;
  }
`;
