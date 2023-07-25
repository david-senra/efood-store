import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../components/CardProduto'
import * as S from './styles'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    console.log('hey')
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco ? valorAtual.preco : 0)
    }, 0)
  }

  return (
    <S.DivPrincipal className={isOpen ? 'is-open' : ''}>
      <S.DivOverlay onClick={closeCart} />
      <S.Aside>
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
          type="button"
        >
          Continuar com a entrega
        </S.ButtonContainer>
      </S.Aside>
    </S.DivPrincipal>
  )
}

export default Cart
