import * as S from './styles'
import FundoImg from '../../assets/images/fundo-trattoria.png'
import { Container } from '../../styles'

export const Banner = () => (
  <S.DivBanner style={{ backgroundImage: `url(${FundoImg})` }}>
    <Container>
      <S.TextoBanner>Italiana</S.TextoBanner>
      <S.TituloBanner>La Dolce Vita Trattoria</S.TituloBanner>
      <S.DivEfeito />
    </Container>
  </S.DivBanner>
)
