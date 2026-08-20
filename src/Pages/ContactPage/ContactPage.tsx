import { ContactForm } from "../../Components/ContactForm/ContactForm"
import { Container } from "../../Components/Container/Container"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const ContactPage = () => {
  return (
    <ContentWrapper title="KONTAKT" showTitle={true}>
        <Container color="#ffffff" padding="2rem 4rem">
          <ContactForm />
        </Container>
    </ContentWrapper> 
  )
}
