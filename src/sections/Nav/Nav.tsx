import React from 'react';
import { Hamburguer } from '../../components';
import { Links } from '../../mocks';
import theme from '../../styles';

import { Brand, Container, Menu } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <Brand href="#" />

      <Hamburguer color={theme.colors.black} />

      <Menu>
        <ul>
          {Links.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
};

export default Nav;
