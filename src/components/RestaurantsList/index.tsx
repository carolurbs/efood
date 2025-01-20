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
          featured={true}
          special={'Destaque da semana'}
          category={'Japonesa'}
          rating={4.9}
          image={sushi}
        />
        <Restaurant
          title={' La Dolce Vita Trattoria '}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          category={'italiana'}
          rating={4.6}
          image={italiana}
        />
        <Restaurant
          title={' La Dolce Vita Trattoria '}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          category={'italiana'}
          rating={4.6}
          image={italiana}
        />
        <Restaurant
          title={' La Dolce Vita Trattoria '}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          category={'italiana'}
          rating={4.6}
          image={italiana}
        />
        <Restaurant
          title={' La Dolce Vita Trattoria '}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          category={'italiana'}
          rating={4.6}
          image={italiana}
        />
        <Restaurant
          title={' La Dolce Vita Trattoria '}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          category={'italiana'}
          rating={4.6}
          image={italiana}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
