import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import EstiloGlobal from './styles'
import Footer from './containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export default App
