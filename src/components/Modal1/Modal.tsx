import React from 'react';

import {
  Close,
  Container,
  Content,
  Header,
  Infos,
  Rooms,
} from './styles';

export type ModalProps = {
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <Modal>
      oi
      {/* <Container>
        <Header>
          <h1>Titulo</h1>

          <Close onClick={closeModal} />
        </Header> */}
      {/* <Content>
         <Rooms></Rooms>

          <Infos>
            <p>descrição</p>
            <p>quartos</p>
            <p>garagem</p>
            <p>localização</p>
            <p>Preço</p>
          </Infos>
        </Content> */}
      {/* </Container> */}
    </Modal>
  );
};

export default Modal;
