import styled from 'styled-components';
import { background } from '../../assets';

export const Container = styled.div`
  height: 400px;
  overflow: hidden;
  top: -1px;
  width: 100%;
`;

export const Content = styled.div`
  background-attachment: fixed;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  opacity: 0.8;
  position: relative;

  &::before {
    content: '';
    background-color: black;
    height: 100%;
    opacity: 0.7;
    position: absolute;
    width: 100%;
  }
  &::after {
    background-color: white;
    bottom: -36px;
    content: '';
    height: 70px;
    transform: rotate(-3deg);
    position: absolute;
    width: 101%;
  }
`;
