import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const AddressContainer = styled.div`
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
export const Small = styled.div`
  color: ${colors.vanila};
  font-size: 12px;
  font-weight: 600;
  margin: 2px 0 8px;
`
