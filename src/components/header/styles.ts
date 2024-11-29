import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 2024px;
  height: 184px;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-beetween;
    font-weight: 900;
    font-size: 16px;
    text-align: center;
    li {
      margin: 72px 256px;
    }
    a {
      color: ${colors.salmon};
    }
  }
`
