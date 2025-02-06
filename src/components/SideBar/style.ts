import styled from 'styled-components'
import { colors } from '../../styles'
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`
export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.visible {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px;
`
