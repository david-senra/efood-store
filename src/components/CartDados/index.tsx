import { useSelector, useDispatch } from 'react-redux'
import { CartState } from '../../store/reducers/cart'
import { changePage } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../CardProduto'
import * as S from './styles'

export type typeCartDados = {
  tipo: 'entrega' | 'pagamento' | 'realizado'
}

const CartDados = ({ tipo }: typeCartDados) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const mudarPagina = (pagina: CartState['cartPage']) => {
    dispatch(changePage(pagina))
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco ? valorAtual.preco : 0)
    }, 0)
  }

  if (tipo === 'entrega') {
    return (
      <S.DivDados>
        <S.TituloDados>Entrega</S.TituloDados>
        <S.FormularioDados>
          <S.FormularioItem>
            <label htmlFor="nomeEntrega">Quem irá receber</label>
            <S.InputFormularioTexto name="nomeEntrega" type="text" />
          </S.FormularioItem>
          <S.FormularioItem>
            <label htmlFor="endereco">Endereço</label>
            <S.InputFormularioTexto name="endereco" type="text" />
          </S.FormularioItem>
          <S.FormularioItem>
            <label htmlFor="cidade">Cidade</label>
            <S.InputFormularioTexto name="cidade" type="text" />
          </S.FormularioItem>
          <S.DivMesmaLinha>
            <S.FormularioItem>
              <label htmlFor="cep">CEP</label>
              <S.InputFormularioTexto name="cep" type="number" />
            </S.FormularioItem>
            <S.FormularioItem>
              <label htmlFor="numero">Número</label>
              <S.InputFormularioTexto name="numero" type="number" />
            </S.FormularioItem>
          </S.DivMesmaLinha>
          <S.FormularioItem>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <S.InputFormularioTexto name="complemento" type="text" />
          </S.FormularioItem>
        </S.FormularioDados>
        <S.DivBotoes>
          <S.ButtonContainer onClick={() => mudarPagina('pagamento')}>
            Continuar com o pagamento
          </S.ButtonContainer>
          <S.ButtonContainer onClick={() => mudarPagina('cart')}>
            Voltar para o carrinho
          </S.ButtonContainer>
        </S.DivBotoes>
      </S.DivDados>
    )
  } else if (tipo === 'pagamento') {
    return (
      <S.DivDados>
        <S.TituloDados>
          Pagamento - Valor a Pagar {formataPreco(getTotalPrice())}
        </S.TituloDados>
        <S.FormularioDados>
          <S.FormularioItem>
            <label htmlFor="nomePagamento">Nome no Cartão</label>
            <S.InputFormularioTexto name="nomePagamento" type="text" />
          </S.FormularioItem>
          <S.DivMesmaLinhaCVV>
            <S.FormularioItem>
              <label htmlFor="numeroCartao">Número do Cartão</label>
              <S.InputFormularioCartao name="numeroCartao" type="number" />
            </S.FormularioItem>
            <S.FormularioItem>
              <label htmlFor="numeroCvv">CVV</label>
              <S.InputFormularioTexto name="numeroCvv" type="number" />
            </S.FormularioItem>
          </S.DivMesmaLinhaCVV>
          <S.DivMesmaLinha>
            <S.FormularioItem>
              <label htmlFor="mesVencimento">Mês de Vencimento</label>
              <S.InputFormularioData name="mesVencimento" type="date" />
            </S.FormularioItem>
            <S.FormularioItem>
              <label htmlFor="anoVencimento">Ano de Vencimento</label>
              <S.InputFormularioData name="anoVencimento" type="date" />
            </S.FormularioItem>
          </S.DivMesmaLinha>
        </S.FormularioDados>
        <S.DivBotoes>
          <S.ButtonContainer onClick={() => mudarPagina('realizado')}>
            Finalizar Pagamento
          </S.ButtonContainer>
          <S.ButtonContainer onClick={() => mudarPagina('entrega')}>
            Voltar para a edição de endereço
          </S.ButtonContainer>
        </S.DivBotoes>
      </S.DivDados>
    )
  } else {
    return (
      <S.DivDados>
        <S.TituloDados>Pedido realizado - NÚMERO</S.TituloDados>
        <S.TextoFormulario>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.TextoFormulario>
        <S.ButtonContainer>Concluir</S.ButtonContainer>
      </S.DivDados>
    )
  }
}

export default CartDados
