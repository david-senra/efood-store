import styled from 'styled-components'
import { cores } from '../../styles'

type ElementosCard = {
  isModal?: boolean
}

export const CardProduto = styled.div<ElementosCard>`
  display: ${({ isModal }) => (isModal ? 'flex' : 'block')};
  align-items: ${({ isModal }) => (isModal ? 'center' : '')};
  height: 344px;
  padding: ${({ isModal }) => (isModal ? '32px' : '8px')};
  background-color: ${cores.rosaEscuro};

  > div {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    justify-content: space-between;
    align-items: start;
    padding-left: 24px;
    padding-bottom: 25px;
    height: 100%;
  }
`

export const ImagemProduto = styled.img<ElementosCard>`
  height: ${({ isModal }) => (isModal ? '280px' : '168px')};
  width: ${({ isModal }) => (isModal ? '280px' : '100%')};
  background-color: transparent;
  object-fit: cover;
`

export const TituloProduto = styled.h3<ElementosCard>`
  text-align: start;
  color: ${({ isModal }) => (isModal ? cores.branca : cores.rosaClaro)};
  font-size: ${({ isModal }) => (isModal ? '18px' : '16px')};
  font-weight: 900;
  line-height: ${({ isModal }) => (isModal ? '21px' : '19px')};
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
`

export const DescricaoProduto = styled.p<ElementosCard>`
  text-align: start;
  color: ${({ isModal }) => (isModal ? cores.branca : cores.rosaClaro)};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  background-color: transparent;
`

export const BotaoAdicionarCarrinho = styled.button<ElementosCard>`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  border: none;
  margin-top: 8px;
  width: ${({ isModal }) => (isModal ? '218px' : '100%')};
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
`

export const IconClose = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  background-color: transparent;
  cursor: pointer;
`
