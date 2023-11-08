// Carousel.tsx
import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Définissez une interface pour les props du composant
interface CarouselProps {
    images: string[]; // Tableau d'URLs d'images
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} className='lg:h-[450px] h-[200px]' alt={`Slide ${index}`} style={{ width: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "block" }} />
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;    
