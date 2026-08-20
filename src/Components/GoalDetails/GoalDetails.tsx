import { useParams } from "react-router"
import { goals } from "../../data/sdgData"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import { Container } from "../Container/Container"
import { GoalList } from "../GoalList/GoalList"
import parse from 'html-react-parser'
import { GoalDetailsStyled } from "./GoalDetails.styled"

export const GoalDetails = () => {
    const { goalId } = useParams()
    const goal = goals.find(x => x.id === goalId)

    if (!goal) {
        return <h2>Goal not found</h2>
    }

    return (
        <GoalDetailsStyled>
            <ContentWrapper metaTitle={`Mål: ${goal.id}`} title={goal.title} showTitle={true}>
                <Container color="#ffffff" padding="1rem 2rem">
                    <h3>{goal.byline}</h3>
                    <iframe
                        src={goal.video_url}
                        title={goal.title}
                        allowFullScreen>
                    </iframe>
                    {goal.description.split("\n\n").map((paragraph, index) => (
                        <p key={index}>
                            {parse(paragraph)}
                        </p>
                    ))}
                </Container>
                <GoalList />
            </ContentWrapper>
        </GoalDetailsStyled>
    )
}
