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

      <Form>
        <InputText labelName="Nome" value={name} />
        <InputText labelName="Email" value={email} />
        <InputText
          type="tel"
          labelName="Celular"
          value={phone}
        />
      </Form>
    </Container>
  );
};

export default Advertise;
