import { ContactFormStyled } from "./ContactForm.styled"

export const ContactForm = () => {
  return (
    <ContactFormStyled>
        <fieldset>
            <div>
                <label htmlFor="name">Navn:</label>
                <input type="text" id="name" name="name" placeholder="Indtast dit navn" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Indtast din email" />
            </div>
            <div>
                <label htmlFor="message">Besked:</label>
                <textarea id="message" name="message" rows={10} placeholder="Indtast din besked"></textarea>
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </fieldset>
    </ContactFormStyled>
  )
}
