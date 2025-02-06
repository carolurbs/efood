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
