import * as S from './styles'
import Produto from '../../models/Produto'

export const CardProduto = ({ nome, imagem, descricao }: Produto) => {
  return (
    <S.CardProduto>
      <S.ImagemProduto src={imagem} />
      <S.TituloProduto>{nome}</S.TituloProduto>
      <S.DescricaoProduto>{descricao}</S.DescricaoProduto>
      <S.BotaoAdicionarCarrinho>Adicionar ao carrinho</S.BotaoAdicionarCarrinho>
    </S.CardProduto>
  )
}
