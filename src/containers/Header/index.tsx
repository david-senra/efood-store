import * as S from './styles'
import { Logo } from '../../components/Logo'
import backgroundHeader from '../../assets/images/background-header.png'
import { Container, Titulo } from '../../styles'

const Header = () => {
  return (
    <S.Header style={{ backgroundImage: `url(${backgroundHeader})` }}>
      <Container>
        <S.DivHeader>
          <Titulo>Restaurantes</Titulo>
          <Logo />
          <Titulo>0 produto(s) no carrinho</Titulo>
        </S.DivHeader>
      </Container>
    </S.Header>
  )
}

export default Header
