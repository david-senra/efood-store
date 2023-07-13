import Header from '../../containers/Header'
import { Banner } from '../../containers/Banner'
import ListaProdutos from '../../containers/ListaProdutos'
import { Container } from '../../styles'

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <Container>
      <ListaProdutos />
    </Container>
  </>
)

export default Perfil
