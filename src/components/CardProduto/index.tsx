import { useState } from 'react'
import * as S from './styles'
import { Produto } from '../../models/Produto'
import closeImg from '../../assets/images/close-icon.png'

export const CardProduto = ({
  nome,
  foto,
  descricao,
  porcao,
  preco
}: Produto) => {
  const [eVisivel, setEVisivel] = useState(false)

  const abreviaDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <S.CardProduto>
        <S.ImagemProduto src={foto} />
        <S.TituloProduto>{nome}</S.TituloProduto>
        <S.DescricaoProduto>{abreviaDescricao(descricao)}</S.DescricaoProduto>
        <S.BotaoAdicionarCarrinho onClick={() => setEVisivel(true)}>
          Adicionar ao carrinho
        </S.BotaoAdicionarCarrinho>
      </S.CardProduto>
      <S.Modal className={eVisivel ? 'visivel' : ''}>
        <S.ModalContent>
          <S.CardProduto isModal>
            <S.ImagemProduto isModal src={foto} />
            <div>
              <S.TituloProduto isModal>{nome}</S.TituloProduto>
              <S.DescricaoProduto isModal>{descricao}</S.DescricaoProduto>
              <S.DescricaoProduto isModal>
                Serve: {porcao === '1 pessoa' ? porcao : 'de ' + porcao}
              </S.DescricaoProduto>
              <S.BotaoAdicionarCarrinho isModal>
                Adicionar ao carrinho - {formataPreco(preco)}
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
