import Carousel from 'react-elastic-carousel';
import CarouselCard from "./CarouselCard";

const CustomCarousel = ({  possibleMatch }) => {
  return (
    <Carousel>
      <CarouselCard possibleMatch={possibleMatch} />

    </Carousel>
  )
}

export default CustomCarousel;



























/* import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const CustomCarousel = ({photos}) => {

    const photoBuffer = photos.map((e) => {
        const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
          "base64"
        )}`;
        return src;
      });

    const carouselItem = () => {
        photoBuffer.map((photo) => (
         <div className="profilePicture__container">
            <img src={photo} className="profilePicture" />
          </div>
        ))
    }


    return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
        </CarouselProvider>
      );
}



export default  CustomCarousel; */