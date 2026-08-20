import { useState } from "react"
import { CustomGoalDesignerStyled } from "./CustomGoalDesigner.styled"
import { Container } from "../Container/Container"

export const CustomGoalDesigner = () => {
  const [title, setTitle] = useState("Min måltekst")
  const [color, setColor] = useState("#27BDDF")

  return (
    <CustomGoalDesignerStyled>
      <Container color="#ffffff" padding="2rem 4rem">
        <div className="content">
          <Container className="form-content">
            <h2>Mangler der et mål?</h2>
            <p>Med tekst felter herunder kan du bygge dit eget mål og give det en bestemt farve.</p>

            <div className="input-group">
              <label htmlFor="title">Titel: </label>
              <input type="text" id="title" name="title" placeholder="Indtast titel på mål" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="color">Farve: </label>
              <input type="text" id="color" name="color" placeholder="Indtast farve i heximal værdi (f.eks. #FF5733)" onChange={(e) => setColor(e.target.value)} />
            </div>
          </Container>

          <section className="preview-section">
            <div className="goal-preview"
              style={{ backgroundColor: color ? color : "#27BDDF" }}
            >
              <h2>{title ? title : "Min måltekst"}</h2>
            </div>
          </section>
        </div>
      </Container>
    </CustomGoalDesignerStyled>
  )
}
