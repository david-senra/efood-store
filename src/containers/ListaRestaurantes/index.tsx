import { useState, useEffect } from 'react'
import * as S from './styles'
import { CardRestaurante } from '../../components/CardRestaurante'
import { Restaurante } from '../../models/Restaurante'

const ListaRestaurantes = () => {
  const [listaRestaurantes, setListaRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaRestaurantes(res))
  }, [])

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <S.ListaRestaurantesStyles>
      {listaRestaurantes.map((restaurante) => (
        <CardRestaurante
          key={restaurante.id}
          id={restaurante.id}
          tipo={restaurante.tipo}
          capa={restaurante.capa}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          destacado={restaurante.destacado}
          descricao={getDescricao(restaurante.descricao)}
        />
      ))}
    </S.ListaRestaurantesStyles>
  )
}

export default ListaRestaurantes
