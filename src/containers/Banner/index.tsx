import { useState, useEffect } from 'react'
import { Restaurante } from '../../models/Restaurante'
import * as S from './styles'
import { Container } from '../../styles'

type TipoBanner = {
  id: number
}

export const Banner = ({ id }: TipoBanner) => {
  const [restauranteAtual, setRestauranteAtual] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestauranteAtual(res))
  }, [id])

  return (
    <S.DivBanner style={{ backgroundImage: `url(${restauranteAtual?.capa})` }}>
      <Container>
        <S.TextoBanner>{restauranteAtual?.tipo}</S.TextoBanner>
        <S.TituloBanner>{restauranteAtual?.titulo}</S.TituloBanner>
        <S.DivEfeito />
      </Container>
    </S.DivBanner>
  )
}
