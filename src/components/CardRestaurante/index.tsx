import * as S from './styles'
import estrelaImg from '../../assets/images/estrela.png'
import { Titulo } from '../../styles'
import Tag from '../Tag'
import Restaurante from '../../models/Restaurante'

export const CardRestaurante = ({
  nome,
  destaque,
  categoria,
  descricao,
  nota,
  imagem
}: Restaurante) => {
  return (
    <S.CardRestaurante>
      <S.ImagemDiv style={{ backgroundImage: `url(${imagem})` }}>
        {destaque === true && <Tag>Destaque da Semana</Tag>}
        <Tag>{categoria}</Tag>
      </S.ImagemDiv>
      <S.CardAtributosDiv>
        <S.TituloNotaDiv>
          <Titulo>{nome}</Titulo>
          <Titulo>
            {nota}
            <img src={estrelaImg} />
          </Titulo>
        </S.TituloNotaDiv>
        <S.DescricaoCard>{descricao}</S.DescricaoCard>
        <Tag>Saiba mais</Tag>
      </S.CardAtributosDiv>
    </S.CardRestaurante>
  )
}
