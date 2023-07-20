import { useParams } from 'react-router-dom'
import Header from '../../containers/Header'
import { Banner } from '../../containers/Banner'
import ListaProdutos from '../../containers/ListaProdutos'
import { Container } from '../../styles'

const Perfil = () => {
  const { id } = useParams()
  let numberId = 0
  if (id) {
    numberId = parseInt(id)
  }

  return (
    <>
      <Header />
      <Banner id={numberId} />
      <Container>
        <ListaProdutos id={numberId} />
      </Container>
    </>
  )
}

export default Perfil
