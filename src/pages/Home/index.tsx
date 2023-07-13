import { Container } from '../../styles'
import Hero from '../../containers/Hero'
import ListaRestaurantes from '../../containers/ListaRestaurantes'

const Home = () => (
  <>
    <Hero />
    <Container>
      <ListaRestaurantes />
    </Container>
  </>
)

export default Home
