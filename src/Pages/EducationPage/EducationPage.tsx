import { Container } from "../../Components/Container/Container"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper";
import { Education } from "../../Components/Education/Education";

export const EducationPage = () => {
    
  return (
    <ContentWrapper title="UNDERVISNING" showTitle={true}>
      <Container color="#ffffff" width="100%">
            <Container padding="0.5rem 5rem">
              <article>
                <p>Her finder du inspiration til din undervisning i form af introducerende øvelser, der kan bruges til at sætte verdensmålene i spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden bedre” og kernestof i fagene.</p>
              </article>
              <Education />
            </Container>
        </Container>
    </ContentWrapper>
  )
}
