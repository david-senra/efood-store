import { useState, useEffect } from 'react'
import { Produto } from '../../models/Produto'
import * as S from './styles'
import { CardProduto } from '../../components/CardProduto'

type ListaTipo = {
  id: number
}

const ListaProdutos = ({ id }: ListaTipo) => {
  const [listaPratos, setListaPratos] = useState<Produto[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setListaPratos(res.cardapio))
  }, [id])

  return (
    <S.ListaProdutosStyle>
      {listaPratos !== undefined &&
        listaPratos.map(({ id, nome, descricao, foto, porcao, preco }) => (
          <CardProduto
            key={id}
            id={id}
            foto={foto}
            nome={nome}
            descricao={descricao}
            porcao={porcao}
            preco={preco}
          />
        ))}
    </S.ListaProdutosStyle>
  )
}

export default ListaProdutos
