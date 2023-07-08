import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
:root {
    --primary: #8c2433;
    --white: #fff;
    --black: #000;
    --gray: #e7e7e7;
    --bg-light: #686767;
    --bg-dark: #353535;
    --primary-text-shadow: 2px 1px 5px rgba(0, 0, 0, 1);
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
    background-color: var(--bg-light);
    background-image: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-dark) 100%);
    height: 100vh;
}

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

}

a{
    color: inherit;
    text-decoration: none;
}
`;
