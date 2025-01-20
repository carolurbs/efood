import Product from '../Product'
import { Container, List } from './style'
import pizza from '../../assets/pizza.png'
import close from '../../assets/close 1.png'

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
      <div>
        <div>
          <header>
            <img src={close} alt="Fechar" />
          </header>
          <h4>Pizza Marguerita</h4>
          <p>Descrição</p>
          <p>Porções</p>
          <img src={pizza} alt="Imagem do Produto" />
        </div>
      </div>
    </div>
  </Container>
)

export default ProductsList
