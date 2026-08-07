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
  .empty {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: ${colors.vanila};
    text-align: center;
  }
`
export const Infos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  color: ${colors.cream};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin: 40px 0 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${colors.cream};
  padding: 12px;
  width: 100%;
  max-width: 100%;
  gap: 12px;
  margin-bottom: 16px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    flex-shrink: 0;
  }
  .icon {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: transparent;
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
    margin-bottom: 8px;
    line-height: 21px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
