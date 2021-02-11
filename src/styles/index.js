import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --black: #000000;
        --secondary: #D22F26;
        --light: #FFFFFF;
        --gray: #686868;
    }

    html {
        font-size: 62.5%;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        /* box-sizing: border-box; */
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        /* font-size: 18px; */
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: "Avenir Next", serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--black);
        color: var(--light);
    }
    h1,
    h2{
        margin: 0;
        line-height: 1.5;
    }
    /* input,
    textarea{
        font-size: 15px;
        font-family: "Avenir Next", serif;
    } */
    /* a{
        text-decoration: none;
        text-decoration-line: #fff;
        color: #fff;
    } */
    `
