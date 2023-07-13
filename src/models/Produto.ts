import prodPizzaMargueritaImg from '../assets/images/produtos/pizzaMarguerita.png'

class Produto {
  id: number
  nome: string
  descricao: string
  imagem: string

  constructor(id: number, nome: string, descricao: string, imagem: string) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.imagem = imagem
  }
}

export default Produto

export const ProdutosIniciais: Produto[] = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  },
  {
    id: 2,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  },
  {
    id: 3,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  },
  {
    id: 4,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  },
  {
    id: 5,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  },
  {
    id: 6,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prodPizzaMargueritaImg
  }
]
