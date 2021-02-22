import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Netflix';
        src: url('../../fonts/AvenirNextLTPro-Regular.otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Netflix';
        src: url('../../fonts/AvenirNextLTPro-Regular.otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Netflix';
        src: url('../../fonts/AvenirNextLTPro-Bold.otf');
        font-weight: 700;
        font-style: normal;
    }

    :root{
        --black: #000000;
        --secondary: #D22F26;
        --light: #FFFFFF;
        --gray: #686868;
    }

    *{
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-button {
            width: 0px;
            height: 0px;
        }

        ::-webkit-scrollbar-thumb {
            background: #3b3c3f;
            border-radius: 5px;
            transition: .5s;
        }

        ::-webkit-scrollbar-track {
            background: #000000;
            border-radius: 0;
        }

        ::-webkit-scrollbar-track:hover {
            background: #000000;
        }

        ::-webkit-scrollbar-corner {
            background: transparent;
        }
    }
        

    html {
        font-size: 62.5%;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.8rem;
        line-height: 1.5;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--black);
        color: var(--light);
        /* padding-bottom: 108px; */
    }
    h1,
    h2{
        margin: 0;
        line-height: 1.5;
    }  
`
