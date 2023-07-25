import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, changePage } from '../../store/reducers/cart'
import * as S from './styles'
import CartItems from '../../components/CartItems'
import CartDados from '../../components/CartDados'

const Cart = () => {
  const { isOpen, cartPage } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(changePage('cart'))
  }

  return (
    <S.DivPrincipal className={isOpen ? 'is-open' : ''}>
      <S.DivOverlay onClick={closeCart} />
      <S.Aside>
        {cartPage === 'cart' && <CartItems />}
        {cartPage === 'entrega' && <CartDados tipo="entrega" />}
        {cartPage === 'pagamento' && <CartDados tipo="pagamento" />}
        {cartPage === 'realizado' && <CartDados tipo="realizado" />}
      </S.Aside>
    </S.DivPrincipal>
  )
}

export default Cart
