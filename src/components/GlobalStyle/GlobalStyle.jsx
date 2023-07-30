import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
:root {
    --primary: #8c2433;
    --white: #fff;
    --black: #000;
    --gray: #e7e7e7;
    --bg-light: #686767;
    --bg-dark: #353535;
    --error: #ff2d4b;
    --primary-text-shadow: 2px 1px 5px var(--black);
    --secondary-text-shadow: 2px 1px 5px var(--white);
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

input {
    outline: 0;
    cursor: pointer;
    &:focus {
        border: 2px solid green;
    }
}

label {
    font-size: 22px;
    text-shadow: var(--primary-text-shadow);
}

button {
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
}
body {
    padding-top: 100px;
    background: var(--bg-light) no-repeat;
    background-image: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-dark) 100%);
    min-height: 100vh;
    width: 100vw;
}

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 100%;
    height: 100%;
}

a{
    color: inherit;
    text-decoration: none;
}

ul {
    list-style-type: none;
}
`;
