import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
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
  const [locals, setLocals] = useState([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setLocals(res))
    )
  }, [])
  return (
    <>
      <Hero />
      <RestaurantsList restaurants={locals} />
      <Footer />
    </>
  )
}

export default Home
