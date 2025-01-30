import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import { useGetLocalsQuery } from '../../services/api'
export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}
const Home = () => {
  const { data: locals } = useGetLocalsQuery()
  if (locals) {
    return (
      <>
        <Hero />
        <RestaurantsList restaurants={locals} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
