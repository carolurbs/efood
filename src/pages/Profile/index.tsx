import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../Home'
const Profile = () => {
  const [local, setLocals] = useState<Restaurants>()

  const { id } = useParams()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setLocals(res))
    )
  }, [id])
  if (!local) {
    return <h3>Carregando</h3>
  }
  return (
    <>
      <Header />
      <Banner />
      <ProductsList dishes={local.cardapio} />
      <Footer />
    </>
  )
}
export default Profile
