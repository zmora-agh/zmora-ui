import { injectGlobal } from 'styled-components';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

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

  pre, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  pre {
    font-family: 'Roboto Mono', monospace;
    white-space: pre-wrap;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
