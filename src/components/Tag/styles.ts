import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-weight: 700;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  line-height: 16px;
  text-align: center;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`
