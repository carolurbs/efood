import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.visible {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px;
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    display: block;
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
