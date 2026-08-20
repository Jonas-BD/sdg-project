import { Container } from "../Container/Container"
import { FooterStyled } from "./Footer.styled"
import UNDPLogo from "../../assets/images/Footer/UNDPLogo.png"
import MSLogo from "../../assets/images/Footer/MSLogo.png"
import GGymLogo from "../../assets/images/Footer/GlobaleGymLogo.png"
import DanidaLogo from "../../assets/images/Footer/DanidaLogo.png"
import { Timer } from "../Timer/Timer"

export const Footer = () => {
  return (
    <FooterStyled>
      <Container width="100%" padding="1rem 0">
        <div className="footer-content">
          <Container padding="0 3rem">
            <section>
              <h3>OM HJEMMESIDEN</h3>
              <p>Dette digitale læringssite er udviklet af UNDP's nordiske kontor i Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke/VerdensKlasse med støtte fra Danidas Oplysningsbevilling.</p>
              <p>Vores mål med dette site er at give lærere og elever på landets ungdomsuddannelser mulighed for at opnå viden, holdninger og handlingskompetence i forhold til FN's verdensmål for bæredygtig udvikling. Sitet opdateres løbende med nyeste statistik, viden og nye undervisningsforløb.</p>
              <h4>TILMELD NYHEDSBREV</h4>
              <p>Tilmeld dig vores nyhedsbrev og få sidste nyt tilsendt direkte til din indbakke. </p>
              <input type="text" placeholder="Indtast din email" />
              <button type="submit">TILMELD</button>
              <h3><Timer /></h3>
            </section>
          </Container>
          <Container padding="0 3rem">
            <section>
              <h3>ORGANISATIONERNE BAG</h3>
              <div className="logos">
                <img src={UNDPLogo} alt="UNDP Logo" />
                <img src={MSLogo} alt="MS Logo" />
              </div>
              <img src={GGymLogo} alt="Globale Gymnasier Logo" />
              <h3>UDVIKLET MED STØTTE FRA DANIDAS OPLYSNINGSBEVILLING</h3>
              <img src={DanidaLogo} alt="Danida Logo" />
            </section>
          </Container>
        </div>
      </Container>
    </FooterStyled>
  )
}