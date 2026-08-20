import styled from "styled-components";

type GoalCardProps = {
    color: string;
}

export const GoalCardStyled = styled.li<GoalCardProps>`
    background-color: #${({ color }) => color};
    font-size: 1.25rem;
    color: white;
    display: grid;
    padding: 0.5rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 175px;
    gap: 0.5rem;

    div:first-child {
        grid-area: 1 / 1 / 2 / 2;
        font-size: 2rem;
        font-weight: bold;

    }
        
    div:nth-child(2) {
        grid-area: 1 / 2 / 2 / 7;
        font-size: 1.25rem;
        font-weight: bold;
        text-align: left;
    }

    div:nth-child(3) {
        grid-area: 2 / 1 / 4 / 7;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            height: 100%;
            fill: white;
        }
    }
`