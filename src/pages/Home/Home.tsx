import React from 'react';
import {
  Abaut,
  Advertise,
  Footer,
  Hero,
  Nav,
  Rent,
} from '../../sections';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <Rent />
      <Advertise />
      <Abaut />
      <Footer />
    </Container>
  );
};

export default Home;
