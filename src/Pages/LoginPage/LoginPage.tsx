import { Container } from "../../Components/Container/Container"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { LoginForm } from "../../Components/LoginForm/LoginForm"

export const LoginPage = () => {
  return (
    <ContentWrapper title="LOGIN" showTitle={true}>
        <Container color="#ffffff" padding="2rem 4rem">
          <LoginForm />
        </Container>
    </ContentWrapper>
  )
}
