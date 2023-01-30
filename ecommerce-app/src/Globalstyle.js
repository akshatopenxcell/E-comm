import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    }
    body{
        background: white;
        font-family: 'Hind', sans-serif;
        overflow-x: hidden;
     }
    
    

    button{
    
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 3px solid black;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Hind', sans-serif;
    &:hover{
        background-color: black;
        color: white;
    }
    
    }
    
    a{
     text-decoration: none;
        color: black;
    }

    h1{
        font-family: "Julius Sans One", sans-serif;
    }
    
    
`;

export default GlobalStyle;
