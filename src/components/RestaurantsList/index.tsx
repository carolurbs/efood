import Restaurant from '../Restaurant'
import { Container, List } from './style'
import sushi from '../../assets/Sushi.png'
import italiana from '../../assets/Italiana.png'

const RestaurantsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          title={'Hioki Sushi '}
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          infos={['Destaque da semana', 'japonesa']}
          rating={'4,9'}
          image={sushi}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
