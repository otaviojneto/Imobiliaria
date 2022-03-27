import React from 'react';
import { InputText } from '../../components';
import { Container, Form } from './styles';

const Advertise: React.FC = () => {
  return (
    <Container>
      <h2>Anuncie conosco </h2>

      <Form>
        <InputText labelName="Nome" />
        <InputText labelName="Email" />
        <InputText labelName="Celular" />
      </Form>
    </Container>
  );
};

export default Advertise;
