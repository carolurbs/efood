import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import SideBar from '../../components/SideBar'
import Loader from '../../components/Loader'
import { colors } from '../../styles'
const Profile = () => {
  const { id } = useParams()
  const { data: locals, isLoading } = useGetMenuQuery(id || '')

  return (
    <>
      <Header />
      {locals ? (
        <>
          <Banner restaurant={locals} isLoading={isLoading} />
          <ProductsList dishes={locals.cardapio} isLoading={isLoading} />
          <SideBar isLoading={isLoading} />
        </>
      ) : (
        <Loader color={colors.salmon} />
      )}

      <Footer />
    </>
  )
}

export default Profile
