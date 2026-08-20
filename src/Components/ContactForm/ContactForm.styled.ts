import styled from "styled-components";

export const ContactFormStyled = styled.form`
    width: 100%;
    max-width: 900px;

    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }

    fieldset > div {
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 1rem;
        align-items: start;
        margin-bottom: 1rem;
    }
    
    label {
        padding-top: 0.5rem;
        font-size: 1.3rem;
    }
        
    input, textarea {
        width: 50%;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1rem;
        resize: none;
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