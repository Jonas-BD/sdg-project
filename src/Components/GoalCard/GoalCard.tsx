import parse from 'html-react-parser';
import { GoalCardStyled } from './GoalCard.styled';

type GoalCardProps = {
    number: string,
    title: string,
    color: string,
    image: string
}

export const GoalCard = ({ number, title, color, image }: GoalCardProps) => {
    return (
        <GoalCardStyled color={color}>
            <div>{number}</div>
            <div>{title}</div>
            <div>{parse(image)}</div>
        </GoalCardStyled>
    )
}
