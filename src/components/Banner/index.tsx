import * as S from './style'
import { Restaurants } from '../../pages/Home'
import { capitalize } from '../RestaurantsList'
type Props = {
  restaurant: Restaurants
}
const Banner = ({ restaurant }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <S.Culinaria>{capitalize(restaurant.tipo)}</S.Culinaria>
      <S.Título>{restaurant.titulo}</S.Título>
    </div>
  </S.Imagem>
)
export default Banner
