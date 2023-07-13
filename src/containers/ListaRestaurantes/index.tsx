import * as S from './styles'
import { CardRestaurante } from '../../components/CardRestaurante'
import { RestaurantesIniciais } from '../../models/Restaurante'

const ListaRestaurantes = () => {
  return (
    <S.ListaRestaurantesStyles>
      {RestaurantesIniciais.map((restaurante) => (
        <CardRestaurante
          key={restaurante.id}
          id={restaurante.id}
          categoria={restaurante.categoria}
          imagem={restaurante.imagem}
          nome={restaurante.nome}
          nota={restaurante.nota}
          destaque={restaurante.destaque}
          descricao={restaurante.descricao}
        />
      ))}
    </S.ListaRestaurantesStyles>
  )
}

export default ListaRestaurantes
