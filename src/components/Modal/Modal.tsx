import React from 'react';
import SwiperReact from '../SwiperReact/SwiperReact';
import {
  Close,
  Container,
  Header,
  Infos,
  ModalContainer,
} from './styles';

export type ModalProps = {
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <ModalContainer>
      <Container>
        <Header>
          <h1>Titulo</h1>

          <Close onClick={closeModal} />
        </Header>
        <SwiperReact />
        <Infos>
          <p>descrição</p>
          <p>quartos</p>
          <p>garagem</p>
          <p>localização</p>
          <p>Preço</p>
        </Infos>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
