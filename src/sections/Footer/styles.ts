import styled from 'styled-components';
import theme from '../../styles/colors';

export const Container = styled.div`
  background-color: ${theme.colors.grey5};
  box-shadow: 0 17px 27px 10px;
  display: flex;
  justify-content: center;

  div {
    padding: 26px;
    text-align: center;

    a {
      color: ${theme.colors.secondary};
    }
  }
`;
