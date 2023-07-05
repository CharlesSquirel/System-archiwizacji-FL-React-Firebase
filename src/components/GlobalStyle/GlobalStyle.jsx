import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
:root {
    --primary: #8c2433;
    --white: #fff;
    --black: #000;
    --gray: #e7e7e7;
    --background: #353535;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

input {
    width: 260px;
    height: 40px;
    padding-left: 8px;
    border-radius: 5px;
    outline: 0;
    border: 1px solid var(--primary);
    font-size: 18px;
    cursor: pointer;
    &:focus {
        border: 2px solid green;
    }
}

label {
    font-size: 22px;
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
    background-color: var(--background);
    height: 100vh;
}

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

}

tr {
    border-bottom: 1px solid var(--primary);
}

a{
    color: inherit;
    text-decoration: none;
}
`;
