import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 304px;
  min-height: 100%;
  background-color: ${colors.salmon};
  color: ${colors.vanila};
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    margin-bottom: 8px;
    @media (max-width: ${breakpoints.tablet}) {
      max-height: 140px;
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  min-height: 100%;
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    display: block;
    margin-top: auto;
  }
`
export const Description = styled.p`
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
  padding: 8px 0;
  min-height: 72px;
`
