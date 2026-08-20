import fnLogo from '../../assets/images/FN-logo.png'
import { HeaderStyled } from './Header.styled'
import { Container } from '../Container/Container'
import { Nav } from '../Nav/Nav'

const links = [
    { name: 'VERDENSMÅLENE', path: '/' },
    { name: 'UNDERVISNING', path: '/education' },
    { name: 'BYG DIT EGET MÅL', path: '/customgoal' },
    { name: 'FAQ', path: '/faq' },
    { name: 'KONTAKT', path: '/contact' },
    { name: 'LOGIN', path: '/login' }
]

export const Header = () => {
    return (
        <header>
            <Container color='#2BBBDE' width='100%' padding='1rem 0'></Container>
            <HeaderStyled>
                <img src={fnLogo} alt="FN Logo" />
                <Nav linksNav={links} />
            </HeaderStyled>
        </header>
    )
}
