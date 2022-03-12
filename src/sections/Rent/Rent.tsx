import React, { useState } from 'react';
import { background } from '../../assets';
import { CardInfo, Modal } from '../../components';
import { Cards, Container } from './styles';

const Rent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <h1>Imóveis adicionados recentemente</h1>

      <Cards>
        <CardInfo
          Img={background}
          onClick={() => setOpenModal(true)}
        />
      </Cards>
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)} />
      )}
    </Container>
  );
};

export default Rent;
