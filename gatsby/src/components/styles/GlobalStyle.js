import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --black: #222222;
      --white: #FFFFFF;
      --blue: #2E318D;
      --beige: #E4DEDC;
      overflow-wrap: break-word;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        color: var(--black);
        font-family: var(--regular);
        font-size: 14px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 680px) {
          font-size: 12px;
      }
    }

h1 {
    font-family: var(--bold);
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
}
h2 {
  font-size: 20px;
}


`