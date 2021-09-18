import React from 'react';
import { CardInfo } from '../../components';
import { background } from '../../assets';

import { Cards, Container } from './styles';

const Rent: React.FC = () => {
  return (
    <Container>
      <h1>Imóveis adicionados recentemente</h1>

      <Cards>
        <CardInfo Img={background} />
        <CardInfo Img={background} />
        <CardInfo Img={background} />
        <CardInfo Img={background} />
      </Cards>
    </Container>
  );
};

export default Rent;
