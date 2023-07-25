import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { useState } from 'react'
import * as S from './styles'
import { Produto } from '../../models/Produto'
import closeImg from '../../assets/images/close-icon.png'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const CardProduto = (produto: Produto) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(open())
    setEVisivel(false)
  }

  const [eVisivel, setEVisivel] = useState(false)

  const abreviaDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.CardProduto>
        <S.ImagemProduto src={produto.foto} />
        <S.TituloProduto>{produto.nome}</S.TituloProduto>
        <S.DescricaoProduto>
          {abreviaDescricao(produto.descricao)}
        </S.DescricaoProduto>
        <S.BotaoAdicionarCarrinho onClick={() => setEVisivel(true)}>
          Adicionar ao carrinho
        </S.BotaoAdicionarCarrinho>
      </S.CardProduto>
      <S.Modal className={eVisivel ? 'visivel' : ''}>
        <S.ModalContent>
          <S.CardProduto isModal>
            <S.ImagemProduto isModal src={produto.foto} />
            <div>
              <S.TituloProduto isModal>{produto.nome}</S.TituloProduto>
              <S.DescricaoProduto isModal>
                {produto.descricao}
              </S.DescricaoProduto>
              <S.DescricaoProduto isModal>
                Serve:{' '}
                {produto.porcao === '1 pessoa'
                  ? produto.porcao
                  : 'de ' + produto.porcao}
              </S.DescricaoProduto>
              <S.BotaoAdicionarCarrinho isModal onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(produto.preco)}
              </S.BotaoAdicionarCarrinho>
            </div>
            <S.IconClose
              src={closeImg}
              alt="fechar modal do produto"
              onClick={() => setEVisivel(false)}
            />
          </S.CardProduto>
        </S.ModalContent>
        <div className="overlay" onClick={() => setEVisivel(false)}></div>
      </S.Modal>
    </>
  )
}
