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
  padding: 32px 16px;
  width: clamp(280px, 85vw, 420px);
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 420px) {
    width: 85vw;
    padding: 24px 14px;
  }
  @media (max-width: 320px) {
    width: 78vw;
    padding: 20px 12px;
  }
`
