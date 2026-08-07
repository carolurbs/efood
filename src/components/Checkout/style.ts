import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CheckoutContainer = styled.div`
  color: ${colors.vanila};
  width: 100%;
  max-width: 420px;
  padding: 24px;
  box-sizing: border-box;
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
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 16px;
    width: 100%;
    max-width: 344px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  input,
  .long,
  .medium,
  .short {
    border: none;
    background-color: ${colors.vanila};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    height: 32px;
    width: 100%;
    max-width: 344px;
    padding: 8px;
  }
  input.error,
  .error.long,
  .error.medium,
  .error.short {
    border: 1px solid red;
  }
  .long {
    max-width: 228px;
  }
  .medium {
    max-width: 154px;
  }
  .short {
    max-width: 88px;
  }
  @media (max-width: 768px) {
    .long,
    .medium,
    .short {
      max-width: 100%;
    }
  }
`
export const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
