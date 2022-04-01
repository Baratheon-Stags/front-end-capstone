import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 20px;
    line-height: 1.35;
    background-color: ${(props) => (props.darkMode ? '#292A30' : '#f5f5f5')};
    color: ${(props) => (props.darkMode ? '#f5f5f5' : '#525252')};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
