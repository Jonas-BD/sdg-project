import { Link } from "react-router"
import { goals } from "../../data/sdgData"
import { GoalCard } from "../GoalCard/GoalCard"
import { GoalListStyled } from "./GoalList.styled"
import { Container } from "../Container/Container"
import divider from "../../assets/images/divider.png"
import listlogo from "../../assets/images/ListLogo.png"

export const GoalList = () => {
    return (
        <GoalListStyled>
            <Container color="#f5f5f5" width="100%" padding="1rem 0">
                <h1>FN's verdensmål for bæredygtig udvikling</h1>
                <img className="divider" src={divider} alt="Divider" />
                <Container padding="0 2rem">
                    <ul>
                        {goals.map((item, index) => {
                            return (
                                <Link to={`/goal/${item.id}`} key={index}>
                                    <GoalCard number={item.id} title={item.title} color={item.color} image={item.icon} />
                                </Link>
                            )
                        })}
                        <img src={listlogo} alt="List Logo" />
                    </ul>
                </Container>
            </Container>
        </GoalListStyled>
    )
}
