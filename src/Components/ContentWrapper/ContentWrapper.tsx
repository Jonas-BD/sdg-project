import { ContentWrapperStyled } from "./ContentWrapper.styled"

type ContentWrapperProps = {
  title?: string,
  metaTitle?: string,
  showTitle: boolean,
  children?: React.ReactNode
}

export const ContentWrapper = ({ title, metaTitle, showTitle, children }: ContentWrapperProps) => {
  document.title = title

  return (
    <>
      <ContentWrapperStyled>
        {showTitle && <h1>{metaTitle && title ? `${metaTitle} ${title}` : metaTitle || title}</h1>}
        {children}
      </ContentWrapperStyled>
    </>
  )
}
