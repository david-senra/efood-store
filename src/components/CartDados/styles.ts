import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const DivDados = styled.div`
  background-color: transparent;
  display: block;
`

export const TituloDados = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.rosaClaro};
  background-color: transparent;
`

export const FormularioDados = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`

export const DivMesmaLinha = styled.div`
  background-color: transparent;
  display: flex;
  gap: 34px;
`

export const DivMesmaLinhaCVV = styled(DivMesmaLinha)`
  justify-content: space-between;
  gap: 30px;
`

export const FormularioItem = styled.div`
  background-color: transparent;
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;

  label {
    background-color: transparent;
    color: ${cores.rosaClaro};
    display: block;
    margin-bottom: 8px;
  }
`

export const InputFormularioTexto = styled.input`
  padding: 8px;
  width: 100%;
  height: 32px;
  border: none;
  margin: 0;
`

export const InputFormularioCartao = styled(InputFormularioTexto)`
  width: 228px;
`

export const InputFormularioData = styled(InputFormularioTexto)`
  width: 155px;
`

export const TextoFormulario = styled(TituloDados)`
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const DivBotoes = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
  margin-bottom: 16px;
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
