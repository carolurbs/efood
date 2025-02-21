import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Cart from '../Cart'
import * as S from './style'
const SideBar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeBar = () => {
    dispatch(close())
  }

  return (
    <S.SideBarContainer className={isOpen ? 'visible' : ''}>
      <S.Overlay onClick={closeBar} />
      <S.SideBar>
        <Cart />
      </S.SideBar>
    </S.SideBarContainer>
  )
}
export default SideBar
