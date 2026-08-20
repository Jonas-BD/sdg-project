import styled from "styled-components";

export const NavStyled = styled.nav`
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-family: oswald, sans-serif;
    font-weight: 700;
    font-size: 20px;

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover, &.active {
            color: #2BBBDE;
        }
    }
`