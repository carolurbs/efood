import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CheckoutContainer = styled.div`
  color: ${colors.vanila};
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    display: block;
    margin-top: 24px;
    cursor: pointer;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    width: 344px;
  }
`
export const FormContainer = styled.form`
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
    &.error {
      border: 1px solid red;
    }
  }
  .long {
    width: 228px;
  }
  .medium {
    width: 154px;
  }
  .short {
    width: 88px;
  }
`
export const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`
