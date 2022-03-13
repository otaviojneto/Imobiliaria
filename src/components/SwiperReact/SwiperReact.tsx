import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import { Container } from './styles';

const SwiperReact: React.FC = ({ children }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {children}
      </Swiper>
    </Container>
  );
};

export default SwiperReact;
