import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'
import SideBar from '../../components/SideBar'
const Profile = () => {
  const { id } = useParams()
  const { data: locals } = useGetMenuQuery(id!)

  if (!locals) {
    return <h3>Carregando</h3>
  }
  return (
    <>
      <Header />
      <Banner restaurant={locals} />
      <ProductsList dishes={locals.cardapio} />
      <SideBar />
      <Footer />
    </>
  )
}
export default Profile
