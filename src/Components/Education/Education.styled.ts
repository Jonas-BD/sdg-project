import styled from "styled-components";

type EducationItemProps = {
    color: string,
}

export const EducationItemStyled = styled.li<EducationItemProps>`
    background-color: #${({ color }) => color};

    display: grid;
    place-items: center;

    padding: 2rem;
    min-height: 100px;

    h2 {
        color: white;
        margin: 0;
    }
`;

export const EducationStyled = styled.section`
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        list-style: none;
        padding: 0;
        margin: 0;
    }
`;