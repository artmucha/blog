import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px; 
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
    font-family: 'Kumbh Sans', sans-serif;
    color: #1a1a1a;
    background-color: #ffffff;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
