import styled from 'styled-components';
import theme from '../../styles/colors';

export const Container = styled.div`
  background-color: ${theme.colors.grey1};
  margin-top: 80px;
  padding: 70px 10%;
  position: relative;
  text-align: center;

  &::before {
    background-color: ${theme.colors.bgColor};
    content: '';
    height: 60px;
    left: 0px;
    top: -32px;
    transform: rotate(2deg);
    position: absolute;
    width: 100%;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    padding: 10px 20px;
  }
`;
