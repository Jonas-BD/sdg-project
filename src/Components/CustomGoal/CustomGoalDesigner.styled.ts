import styled from "styled-components";

export const CustomGoalDesignerStyled = styled.section`
    width: 100%;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        max-width: 1200px;
    }

    .form-content {
        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
            
        p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
        }
    }
    
    .input-group {
        display: grid;
        grid-template-columns: 70px 1fr;
        align-items: center;

        gap: 0.5rem;
        margin-bottom: 1rem;

        label {
            font-size: 1rem;
        }

        input {
            padding: 0.5rem 1rem;

            border: 1px solid #ccc;
            border-radius: 3px;
        }
    }

    .goal-preview {
        width: 275px;
        aspect-ratio: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-transform: uppercase;
    }
`