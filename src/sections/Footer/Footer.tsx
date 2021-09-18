import React from 'react';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <h4>LOCALIZAÇÃO</h4>
        <p>Rua Rio Grande do Norte 70, Sala 4F.</p>
        <p>Santos,Sp</p>
      </div>

      <div>
        <h4>CONTATO</h4>
        <p>(13)98804-5152</p>
      </div>
    </Container>
  );
};

export default Footer;
