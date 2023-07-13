import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9'
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const Titulo = styled.h3`
  color: ${cores.rosaEscuro};
  padding-top: 8px;
  padding-left: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;

  img {
    padding-left: 8px;
    height: 21px;
    vertical-align: middle;
    margin-bottom: 5px;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }
`

export default GlobalStyle
