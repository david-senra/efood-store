import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../models/Produto'

export type CartState = {
  itens: Produto[]
  isOpen: boolean
  cartPage: 'cart' | 'entrega' | 'pagamento' | 'realizado'
}

const initialState: CartState = {
  itens: [],
  isOpen: false,
  cartPage: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    changePage: (state, action: PayloadAction<CartState['cartPage']>) => {
      state.cartPage = action.payload
    },
    add: (state, action: PayloadAction<Produto>) => {
      const ProdutoProcurado = state.itens.find(
        (item) => item.id === action.payload.id
      )
      ProdutoProcurado
        ? alert('Produto já adicionado')
        : state.itens.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, remove, open, close, changePage } = cartSlice.actions
export default cartSlice.reducer
