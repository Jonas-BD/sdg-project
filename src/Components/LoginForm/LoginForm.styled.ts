import styled from "styled-components";

export const LoginFormStyled = styled.form`
    div {
        display: grid;
        grid-template-columns: 10rem 1fr;
        width: 80%;
    }
    
    label {
        width: 10rem;
    }

    input {
        width: 50%;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    input[type="submit"] {
        grid-column: 2;
        justify-self: end;
        width: 73px;
        margin: 0 auto;
        background-color: #F7EBEC;
        border: none;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`