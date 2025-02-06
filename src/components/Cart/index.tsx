import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'
import Button from '../Button'
import * as S from './styles'
import trash from '../../assets/lixeira.svg'
export type Props = {
  Next: () => void
}
const Cart = ({ Next }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.CartContainer>
      <ul>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{formatPrice(item.preco)}</span>
            </div>
            <button className="icon" onClick={() => removeItem(item.id)}>
              <img src={trash} />
            </button>
          </S.CartItem>
        ))}
      </ul>
      <S.Infos>
        <li>Valor Total</li>
        <li>{formatPrice(getTotalPrice())}</li>
      </S.Infos>
      <Button type={'button'} title={'Continuar com a entrega'} onClick={Next}>
        Continuar com a entrega
      </Button>
    </S.CartContainer>
  )
}
export default Cart
