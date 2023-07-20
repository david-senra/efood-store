export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  descricao: string
  avaliacao: number
  capa: string
  cardapio?: {
    id: number
    nome: string
    foto: string
    preco: number
    descricao: string
    porcao: string
  }
}
