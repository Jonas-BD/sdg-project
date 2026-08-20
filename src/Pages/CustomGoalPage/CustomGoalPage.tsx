import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { CustomGoalDesigner } from "../../Components/CustomGoal/CustomGoalDesigner"

export const CustomGoalPage = () => {
  return (
    <ContentWrapper title="BYG DIT EGET MÅL" showTitle={true}>
      <CustomGoalDesigner />
    </ContentWrapper>
  )
}
