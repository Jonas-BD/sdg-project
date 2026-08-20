import { Container } from '../Container/Container'
import { educationData } from '../../data/educationData'
import { EducationItemStyled, EducationStyled } from './Education.styled'

export const Education = () => {
    return (
        <EducationStyled>
            <Container color="#ffffff" width="100%">
                <ul>
                    {educationData.map((item) => (
                        <EducationItemStyled
                            key={item.title}
                            color={item.color}
                        >
                            <h2>{item.title}</h2>
                        </EducationItemStyled>
                    ))}
                </ul>
            </Container>
        </EducationStyled>
    )
}
