import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProduto = styled.div`
  display: block;
  height: 344px;
  padding: 8px;
  background-color: ${cores.rosaEscuro};
`

export const ImagemProduto = styled.img`
  height: 168px;
  width: 100%;
  background-color: transparent;
`

export const TituloProduto = styled.h3`
  text-align: start;
  color: ${cores.rosaClaro};
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
`

export const DescricaoProduto = styled.p`
  text-align: start;
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  background-color: transparent;
`

export const BotaoAdicionarCarrinho = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  border: none;
  margin-top: 8px;
  width: 100%;
  font-size: 14px;
  height: 24px;
  cursor: pointer;
`
