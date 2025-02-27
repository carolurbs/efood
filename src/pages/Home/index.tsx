import { useGetLocalsQuery } from '../../services/api'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import { colors } from '../../styles'
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
  const { data: locals, isLoading } = useGetLocalsQuery()

  return (
    <>
      <Hero />
      {locals ? (
        <>
          <RestaurantsList restaurants={locals} isLoading={isLoading} />
        </>
      ) : (
        <Loader color={colors.salmon} />
      )}
      <Footer />
    </>
  )
}

export default Home
