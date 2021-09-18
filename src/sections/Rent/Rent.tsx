import React from 'react';
import { CardInfo } from '../../components';
import { background } from '../../assets';

import { Container } from './styles';

const Rent: React.FC = () => {
  return (
    <Container>
      <CardInfo Img={background} />
    </Container>
  );
};

export default Rent;
