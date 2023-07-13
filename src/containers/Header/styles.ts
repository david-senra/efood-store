import styled from 'styled-components'
import { LogoStyle } from '../../components/Logo/styles'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  text-align: center;
  padding-top: 40px;

  ${LogoStyle} {
    margin-left: 44px;
  }
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`
