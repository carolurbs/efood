import styled from 'styled-components'
import { colors } from '../../styles'

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.salmon};
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  span {
    margin-left: 8px;
  }
`
