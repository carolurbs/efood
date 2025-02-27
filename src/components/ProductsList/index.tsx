import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Product from '../Product'
import Button from '../Button'
import { MenuItem } from '../../pages/Home'
import Loader from '../Loader'
import * as S from './style'
import { colors } from '../../styles'
import close from '../../assets/close 1.png'
export type Props = {
  dishes: MenuItem[]
  isLoading: boolean
}
export type ModalState = {
  isVisible: boolean
}
export const formatPrice = (preco?: number) => {
  if (preco === undefined) return 'R$ 0,00'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ dishes, isLoading }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<ModalState>()
  const [selectedDish, setSelectedDish] = useState<MenuItem>()
  const openModal = (dishes: MenuItem) => {
    setSelectedDish(dishes)
    setModal({
      isVisible: true
    })
  }
  const closeModal = () => {
    setSelectedDish(undefined)
    setModal({
      isVisible: false
    })
  }
  const addToCart = () => {
    if (selectedDish) {
      dispatch(add(selectedDish))
      dispatch(open())
      closeModal()
    }
  }
  if (isLoading) {
    return <Loader color={colors.salmon} />
  }
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {dishes.map((dishes) => (
            <>
              <Product
                key={dishes.id}
                id={dishes.id}
                title={dishes.nome}
                description={dishes.descricao}
                image={dishes.foto}
                price={dishes.preco}
                portion={dishes.porcao}
                onButtonClick={() => openModal(dishes)}
              />
            </>
          ))}
        </S.List>
      </div>
      <S.Modal className={modal?.isVisible && selectedDish ? 'visible' : ''}>
        <S.ModalContainer className="container">
          <header>
            <img src={close} alt="Fechar" onClick={() => closeModal()} />
          </header>
          <S.ModalContent>
            <div>
              <img src={selectedDish?.foto} alt={selectedDish?.nome} />
            </div>
            <div>
              <h4>
                <b> {selectedDish?.nome}</b>
              </h4>
              <p>{selectedDish?.descricao}</p>
              <p>Serve: de {selectedDish?.porcao}</p>
              <Button type={'button'} title={''} onClick={addToCart}>
                {`Adicionar ao carrinho - ${formatPrice(selectedDish?.preco)}`}
              </Button>
            </div>
          </S.ModalContent>
        </S.ModalContainer>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </S.Container>
  )
}

export default ProductsList
