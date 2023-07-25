import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, changePage } from '../../store/reducers/cart'
import { formataPreco } from '../../components/CardProduto'
import { CartState } from '../../store/reducers/cart'
import * as S from './styles'

const CartItems = () => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const mudarPagina = (pagina: CartState['cartPage']) => {
    dispatch(changePage(pagina))
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco ? valorAtual.preco : 0)
    }, 0)
  }

  return (
    <>
      <S.ListaItems>
        {itens.map(({ id, nome, preco, foto }) => (
          <S.CartItem key={id}>
            <img src={foto} />
            <div>
              <h3>{nome}</h3>
              <span>{formataPreco(preco)}</span>
            </div>
            <button type="button" onClick={() => removeItem(id)} />
          </S.CartItem>
        ))}
      </S.ListaItems>
      <S.DivPrices>
        <S.Prices>Valor total</S.Prices>
        <S.Prices>{formataPreco(getTotalPrice())}</S.Prices>
      </S.DivPrices>
      <S.ButtonContainer
        title="Clique aqui para continuar com a entrega"
        onClick={() => mudarPagina('entrega')}
        type="button"
      >
        Continuar com a entrega
      </S.ButtonContainer>
    </>
  )
}

export default CartItems
