import React from 'react';
import { Footer, Hero, Nav, Rent } from '../../sections';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <Rent />
      <Footer />
    </Container>
  );
};

export default Home;
