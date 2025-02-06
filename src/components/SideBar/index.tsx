import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Cart from '../Cart'
import Address from '../Address'
import Payment from '../Payment'
import Checkout from '../Checkout'
import * as S from './style'
const SideBar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.SideBarContainer className={isOpen ? 'visible' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <Cart
          Next={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </S.SideBar>
    </S.SideBarContainer>
  )
}
export default SideBar
