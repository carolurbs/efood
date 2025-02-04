import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  width: 100%;
  padding: 64px 172px 120px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 120px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Modal = styled.div`
  z-index: 1;
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
    margin-right:172px;
    @media (max-width: ${breakpoints.desktop}){
    width:640px;
    margin-right: 120px;
  }
  @media (max-width: ${breakpoints.tablet}){
  width: 320px;
  margin-right: 80px;
  }
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
  @media (max-width: ${breakpoints.desktop}){
  gap:16px;
  padding: 24px;
  font-size:14px;
  }
  @media (max-width: ${breakpoints.tablet}){
  gap:8px;
  padding:16px;
  font-size: 12px;
  }
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;

  }
    h4{
    font-size:18px;
    }
  p {
    margin: 24px 0;
  }
    img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    @media (max-width: ${breakpoints.desktop}){
    height:180px;
    width:180px;

  }
  @media (max-width: ${breakpoints.tablet}){
    height:96px;
    width:96px;
  }
`
