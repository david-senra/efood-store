import restHiokiImg from '../assets/images/restaurantes/hioki.png'
import restDolceImg from '../assets/images/restaurantes/dolcevitta.png'

class Restaurante {
  id: number
  nome: string
  destaque: boolean
  categoria: string
  descricao: string
  nota: number
  imagem: string

  constructor(
    id: number,
    nome: string,
    destaque: boolean,
    categoria: string,
    descricao: string,
    nota: number,
    imagem: string
  ) {
    this.id = id
    this.nome = nome
    this.destaque = destaque
    this.categoria = categoria
    this.descricao = descricao
    this.nota = nota
    this.imagem = imagem
  }
}

export default Restaurante

export const RestaurantesIniciais: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    destaque: true,
    categoria: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.9,
    imagem: restHiokiImg
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    destaque: false,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: restDolceImg
  },
  {
    id: 3,
    nome: 'La Dolce Vita Trattoria',
    destaque: false,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: restDolceImg
  },
  {
    id: 4,
    nome: 'La Dolce Vita Trattoria',
    destaque: false,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: restDolceImg
  },
  {
    id: 5,
    nome: 'La Dolce Vita Trattoria',
    destaque: false,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: restDolceImg
  },
  {
    id: 6,
    nome: 'La Dolce Vita Trattoria',
    destaque: false,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: restDolceImg
  }
]
