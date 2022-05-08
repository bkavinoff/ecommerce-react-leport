import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

//MUI:
import Container from '@mui/material/Container'

export default function CarouselComponent() {
return (
  <Container>
    <div style={{ display: 'block', width: 1200, padding: 30 }}>
    <Carousel>
      <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src="/img/slide1.webp"
        alt="Banner 1"
      />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src="/img/slide2.webp"
        alt="Banner 2"
      />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src="/img/slide3.webp"
        alt="Banner 3"
      />
      </Carousel.Item>
    </Carousel>
    </div>
  </Container>
);
}
