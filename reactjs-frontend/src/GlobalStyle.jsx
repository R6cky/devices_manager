import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    

    :root{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        list-style: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
    
    
        //variables


        --main-color: #110f32;
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
