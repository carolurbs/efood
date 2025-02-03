import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeroBar = styled.header`
  width: 100vw;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
  li {
    margin: 40px 0;
    max-width: 32ch;
    img {
      margin-bottom: 120px;
    }
  }
`
