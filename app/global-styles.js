import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
    line-height: 24px;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
