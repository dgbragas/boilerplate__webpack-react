import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    ::selection {
      background: #000;
      color: #fff;
    }

    &:not(${headings}) {
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  ${headings} {
    font-family: 'Sedgwick Ave Display', cursive;
  }

  html, body, #root {
    background: linear-gradient(94.94deg, #1C78C0 -7.33%, #8ED6FB 146.27%);
    height: 100%;
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
