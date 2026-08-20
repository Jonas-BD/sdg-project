import styled from "styled-components";
import Worldmap from '../../assets/images/Footer/FN-footer.png';

export const FooterStyled = styled.footer`
    background-image: url(${Worldmap});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

    .footer-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    section {
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.5;
        }
        img {
            max-width: 200px;
            height: auto;
            object-fit: contain;
        }

        .logos {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 1.5rem;

            img {
                max-width: 150px;
                max-height: 100px;
                width: auto;
                height: auto;
                object-fit: contain;
            }
        }
    }
`