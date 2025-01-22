import { useState } from 'react'
import Product from '../Product'
import * as S from './style'
import pizza from '../../assets/pizza.png'
import close from '../../assets/close 1.png'
import Button from '../Button'

const ProductsList = () => {
  const [modalIsOpened, setModalOpen] = useState(false)
  return (
    <S.Container>
      <div className="container">
        <S.List>
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
          <Product
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            image={pizza}
            onButtonClick={() => setModalOpen(true)}
          />
        </S.List>
      </div>
      <S.Modal className={modalIsOpened ? 'visible' : ''}>
        <S.ModalContainer className="container">
          <header>
            <img src={close} alt="Fechar" onClick={() => setModalOpen(false)} />
          </header>
          <S.ModalContent>
            <div>
              <img src={pizza} alt="Imagem do Produto" />
            </div>
            <div>
              <h4>
                <b> Pizza Marguerita</b>
              </h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <Button type={'button'} title={''}>
                Adicionar ao carrinho - R$ 60,90
              </Button>
            </div>
          </S.ModalContent>
        </S.ModalContainer>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </S.Modal>
    </S.Container>
  )
}

export default ProductsList
