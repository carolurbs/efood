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
export const AddressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
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
    margin-bottom: 8px;
  }
  h3 {
    color: ${colors.vanila};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`
export const FormContainer = styled.div`
  margin-bottom: 24px;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: ${colors.vanila};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input {
    border: none;
    background-color: ${colors.vanila};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    height: 32px;
    width: 344px;
    padding: 8px;
  }
  .short {
    width: 154px;
  }
`
export const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`
