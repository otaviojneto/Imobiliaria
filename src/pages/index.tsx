import React from 'react';
import {
  Abaut,
  Advertise,
  Footer,
  Hero,
  Nav,
  Rent,
} from '../sections';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Rent />
      <Advertise />
      <Abaut />
      <Footer />
    </>
  );
};

export default Home;
