import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const ErrorPage = () => {
  return (
    <ContentWrapper title="404 - Ugyldig URL" showTitle={true}>
        <article>
            <p>Siden findes ikke!</p>
        </article>
    </ContentWrapper>
  )
}
