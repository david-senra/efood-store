import styled from 'styled-components'
import { cores } from '../../styles'

export const CardRestaurante = styled.div`
  display: block;
  height: 408px;
`

export const ImagemDiv = styled.div`
  width: 100%;
  height: 217px;
  text-align: center;
  position: relative;
`

export const CardAtributosDiv = styled.div`
  height: 188px;
  border-right: solid 1px ${cores.rosaEscuro};
  border-left: solid 1px ${cores.rosaEscuro};
  border-bottom: solid 1px ${cores.rosaEscuro};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TituloNotaDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
`

export const DescricaoCard = styled.p`
  color: ${cores.rosaEscuro};
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
`
