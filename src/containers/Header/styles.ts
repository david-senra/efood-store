import styled from 'styled-components'
import { LogoStyle } from '../../components/Logo/styles'

export const Header = styled.header`
  width: 100%;
  height: 163px;
  text-align: center;
  padding-top: 40px;
  background-color: transparent;

  ${LogoStyle} {
    margin-left: 44px;
    background-color: transparent;
  }
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: transparent;
`
