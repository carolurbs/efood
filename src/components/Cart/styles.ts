import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.aside`
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    display: block;
    cursor: pointer;
  }
`
export const Infos = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.cream};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin: 40px 0 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${colors.cream};
  padding: 12px 8px;
  width: 344px;
  gap: 8px;
  margin-bottom: 16px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
  .icon {
    position: absolute;
    top: 64px;
    left: 320px;
    backgrond-color: transparent;
    border: none;
    height: 16px;
    width: 16px;
    img {
      height: 16px;
      width: 16px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    line-height: 21px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
