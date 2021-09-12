import styled from 'styled-components';
import { IcBrand, IcBrandLmhWhite } from '../../icons';
import theme from '../../styles/colors';

export type OpenProps = {
  isOpen?: boolean;
};

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.grey1};
  display: flex;
  justify-content: space-between;
  padding: 15px 15%;
`;

export const Menu = styled.div<OpenProps>`
  background: chocolate;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  height: ${({ isOpen }) => (isOpen ? '92vh' : 0)};
  justify-content: center;
  position: absolute;
  right: 0;
  text-align: center;
  top: 70px;
  width: ${({ isOpen }) => (isOpen ? '100%' : 0)};

  @media (min-width: 569px) {
    display: block;
    height: 0;
    position: static;
    width: auto;

    ul {
      display: flex;

      li {
        a {
          border-bottom: 1px solid transparent;
          border-top: 1px solid transparent;
          border-radius: 8px;
          color: ${theme.colors.secondary};
          font-weight: 500;
          padding: 5px;
          transition: ease-in-out 0.4s;

          &:hover {
            border-bottom: 1px solid;
            border-top: 1px solid;
            border-radius: 8px;
            color: ${theme.colors.white};
            padding: 5px;
          }
        }

        & + li {
          a {
            margin-left: 14px;
          }
        }
      }
    }
  }
`;

export const Brand = styled.a`
  background-image: url(${IcBrand});
  background-size: 40px;
  height: 40px;
  transition: ease-in 0.4s;
  width: 40px;

  &:hover {
    background-image: url(${IcBrandLmhWhite});
  }
`;
