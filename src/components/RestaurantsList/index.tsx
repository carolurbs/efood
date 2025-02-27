import { Restaurants } from '../../pages/Home'
import { colors } from '../../styles'
import Restaurant from '../Restaurant'
import { Container, List } from './style'
import Loader from '../Loader'
export type Props = {
  restaurants: Restaurants[]
  isLoading: boolean
}
export const capitalize = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}
const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader color={colors.salmon} />
  }
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <>
              <Restaurant
                id={restaurant.id}
                title={restaurant.titulo}
                featured={restaurant.destacado}
                category={capitalize(restaurant.tipo)}
                rating={restaurant.avaliacao}
                description={restaurant.descricao}
                image={restaurant.capa}
              />
            </>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
