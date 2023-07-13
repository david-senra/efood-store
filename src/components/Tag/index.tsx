import * as S from './styles'

type TagType = {
  children?: string
}

const Tag = ({ children }: TagType) => {
  if (children === 'Saiba mais') {
    return <S.TagStyleButton to={'perfil'}>{children}</S.TagStyleButton>
  } else if (children === 'Destaque da Semana') {
    return <S.TagStyleDestaque>{children}</S.TagStyleDestaque>
  }
  return <S.TagStyleImagem>{children}</S.TagStyleImagem>
}

export default Tag
