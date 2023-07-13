import * as S from './styles'
import { CardProduto } from '../../components/CardProduto'
import { ProdutosIniciais } from '../../models/Produto'

const ListaProdutos = () => {
  return (
    <S.ListaProdutosStyle>
      {ProdutosIniciais.map(({ id, nome, descricao, imagem }) => (
        <CardProduto
          key={id}
          id={id}
          imagem={imagem}
          nome={nome}
          descricao={descricao}
        />
      ))}
    </S.ListaProdutosStyle>
  )
}

export default ListaProdutos
