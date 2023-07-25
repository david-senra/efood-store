import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import fechar from '../../assets/images/lixeira.svg'

export const DivPrincipal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  background-color: transparent;

  &.is-open {
    display: flex;
  }
`

export const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.7;
  z-index: 1;
`

export const Aside = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 2;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`

export const ListaItems = styled.ul`
  background-color: transparent;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.rosaClaro};
  padding: 8px 0;
  margin-bottom: 16px;
  position: relative;
  background-color: ${cores.rosaClaro};

  div {
    background-color: transparent;
  }

  img {
    margin: 0 8px;
    margin-bottom: 4px;
    height: 80px;
    width: 80px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      height: 50px;
      width: 50px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.rosaEscuro};
    background-color: transparent;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 13px;
    }
  }

  span {
    font-size: 14px;
    font-weight: normal;
    color: ${cores.rosaEscuro};
    background-color: transparent;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`

export const DivPrices = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.rosaClaro};
  background-color: transparent;

  span {
    background-color: transparent;
    text-align: end;
  }
`

export const ButtonContainer = styled.button`
  height: 24px;
  border: none;
  color: ${cores.rosaEscuro};
  background-color: ${cores.rosaClaro};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
`
