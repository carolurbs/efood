import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  width: 100%;
  padding: 80px 172px 120px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 120px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
