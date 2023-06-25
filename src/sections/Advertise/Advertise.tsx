import React, { useState } from 'react';
import { InputText } from '../../components';
import { Container, Form } from './styles';

const Advertise: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  return (
    <Container>
      <h2>Anuncie conosco </h2>

      <Form
        action="https://formsubmit.co/otaviojnetoo@gmail.com"
        method="POST"
      >
        <InputText
          labelName="Nome"
          value={name}
          onChange={() => setName}
        />
        <InputText
          labelName="Email"
          value={email}
          onChange={() => setEmail}
        />
        <InputText
          type="tel"
          labelName="Celular"
          value={phone}
          onChange={() => setPhone}
        />
        <button type="submit">botão </button>
      </Form>
    </Container>
  );
};

export default Advertise;
