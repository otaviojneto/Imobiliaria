import styled from 'styled-components';
import theme from '../../styles/colors';
import { background } from '../../assets';

export const Container = styled.div`
  height: 400px;
  overflow: hidden;
  top: -1px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-attachment: fixed;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 400px;
  justify-content: center;
  position: relative;

  &::before {
    background-color: ${theme.colors.white};
    content: '';
    height: 100%;
    opacity: 0.2;
    position: absolute;
    width: 100%;
  }

  &::after {
    background-color: ${theme.colors.bgColor};
    bottom: -36px;
    content: '';
    height: 70px;
    left: 3px;
    transform: rotate(-3deg);
    position: absolute;
    width: 100%;
  }

  img {
    height: 350px;
    z-index: 1;
  }
`;
