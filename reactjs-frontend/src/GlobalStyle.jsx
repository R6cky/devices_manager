import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    

    :root{
        --main-color: #110f32;
        --color-message-input:yellow;
    }
    

    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        list-style: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

   

    button{
        cursor: pointer;
    }

    input{
        font-size: 28px;
    }
    

    a{
        text-decoration: none;
    }

`;
