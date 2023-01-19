import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
html,
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.div-error-404 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.error-404 {
  margin: 15px;
  padding: 15px;
  border-right: 1px solid black;
}
& [data-header] {
  transition: 0.4s;
  & [data-right] {
    transition:1.6s;
  }
}
& [data-header].header {
      opacity: 0;
      z-index: -1;
      & [data-right] {
        transform: translate3d(400px,0,0);
      };
}

`;
