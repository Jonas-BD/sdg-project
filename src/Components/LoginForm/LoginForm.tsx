import { LoginFormStyled } from "./LoginForm.styled"

export const LoginForm = () => {
  return (
    <LoginFormStyled>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" placeholder="Indtast dit brugernavn" />
      </div>
      <div>
        <label htmlFor="password">Adgangskode: </label>
        <input type="password" id="password" name="password" placeholder="Indtast din adgangskode" />
      </div>
      <div>
        <input type="submit" value="Login" /> 
      </div>
    </LoginFormStyled>
  )
}
