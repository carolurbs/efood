import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './style'
export type Props = {
  restaurants: Restaurants[]
}
const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <>
            <Restaurant
              id={restaurant.id}
              title={restaurant.titulo}
              featured={restaurant.destacado}
              category={restaurant.tipo}
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

export default RestaurantsList
