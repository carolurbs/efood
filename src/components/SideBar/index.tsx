import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { close } from '../../store/reducers/cart'
import Cart from '../Cart'
import Checkout from '../Checkout'
import Loader from '../Loader'
import * as S from './style'
import { colors } from '../../styles'
type Props = {
  isLoading: boolean
}

const SideBar = ({ isLoading }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState(0)
  const dispatch = useDispatch()
  const closeBar = () => {
    dispatch(close())
  }
  const Advance = () => {
    setStep((step) => step + 1)
  }
  const Back = () => {
    setStep((step) => step - 1)
  }
  const CheckStatus = () => {
    if (items.length > 0) Advance()
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }
  if (isLoading) {
    return <Loader color={colors.vanila} />
  }
  return (
    <S.SideBarContainer className={isOpen ? 'visible' : ''}>
      <S.Overlay onClick={closeBar} />
      <S.SideBar>
        {step === 0 ? (
          <Cart totalPrice={getTotalPrice()} Next={CheckStatus} />
        ) : (
          <Checkout Exit={closeBar} price={getTotalPrice()} Cart={Back} />
        )}
      </S.SideBar>
    </S.SideBarContainer>
  )
}
export default SideBar
