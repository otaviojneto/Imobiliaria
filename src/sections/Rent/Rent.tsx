import React, { useCallback } from 'react';
import { CardInfo } from '../../components';
import { background } from '../../assets';

import { Cards, Container } from './styles';
import { infosImobiliaria } from '../../services/api';

const getHouse = async () => {
  try {
    const { data } = await infosImobiliaria.get();
  } catch (error) {
    console.log('error');
  }
};

// async function getContent() {
//   try {
//     const api = await fetch(
//       'https://admin-edbe9-default-rtdb.firebaseio.com/',
//     );
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(getContent());

const Rent: React.FC = () => {
  return (
    <Container>
      <h1>Imóveis adicionados recentemente</h1>

      <Cards>
        <CardInfo type="{ }" Img={background} />
      </Cards>
    </Container>
  );
};

export default Rent;
