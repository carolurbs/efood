import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  width: 100%;
  padding: 80px 240px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`
export const Modal = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  &.visible {
    display: flex;
  }
`
export const ModalContainer = styled.div`
  position:relative;
    z-index:1;
    background-color: ${colors.salmon};
    color: ${colors.white};
    width: 1024px;
    header{
    display: flex;
    justify-content: end;
    padding: 8px;
    }
  }
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 32px;
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
  }
  p {
    margin: 24px 0;
  }
    img {
    height: 280px;
    width: 280px;
    object-fit: cover;
`
