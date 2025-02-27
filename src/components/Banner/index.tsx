import { Restaurants } from '../../pages/Home'
import { capitalize } from '../RestaurantsList'
import Loader from '../Loader'
import * as S from './style'
import { colors } from '../../styles'
type Props = {
  restaurant: Restaurants
  isLoading: boolean
}
const Banner = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader color={colors.salmon} />
  }
  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.Culinaria>{capitalize(restaurant.tipo)}</S.Culinaria>
        <S.Título>{restaurant.titulo}</S.Título>
      </div>
    </S.Imagem>
  )
}

export default Banner
