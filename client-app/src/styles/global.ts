import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input, button {
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin:0 auto;
  padding:40px 20px;
}

body,
button {
  // font-weight: 400;
  font-family: Roboto, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #c2c6cf;
  color: #555;
}
*:focus {
  outline: 0;
}

html,
body {
  background: linear-gradient(-90deg, #8257e5, #7159c1);
}

body {
  -webkit-font-smoothing: antialiased !important;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
button {
  color: #222;
  font-size: 1rem; //16px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;
