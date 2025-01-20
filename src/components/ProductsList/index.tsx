import Product from '../Product'
import { Container, List } from './style'
import pizza from '../../assets/pizza.png'

type Item = {
  name: string
  url: string
  description: string
}

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
