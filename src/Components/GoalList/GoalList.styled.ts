import styled from "styled-components";

export const GoalListStyled = styled.div`
    text-align: left;
    width: 100%;

    h1 {
        display: block;
        margin-bottom: 0;
        height: auto;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 0.5rem;
        list-style: none;
        align-items: center;
    }

    .divider {
        display: block;
        margin: 0 auto;
        padding: 2rem 0;
        height: 10px;
        width: 270px;
    }

    img {
        display: block;
        margin: 0 auto;
        max-height: 190px;
    }
`