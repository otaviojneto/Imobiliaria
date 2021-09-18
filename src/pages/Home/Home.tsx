import React from 'react';
import { Hero, Nav, Rent } from '../../sections';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <Rent />
    </Container>
  );
};

export default Home;
