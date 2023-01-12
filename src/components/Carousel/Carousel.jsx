import Carousel from 'react-bootstrap/Carousel';

import imgCarousel from '../../../public/aliloCarousel.png'
import imgCarousel2 from '../../../public/pexels-cottonbro-studio-carousel.png'
import imgCarousel3 from '../../../public/pexels-cottonbro-studio-carousel2.png'
import imgCarousel4 from '../../../public/pexels-tony-smith-carousel3.png'

import './Carousel.css'

function CarouselFadeExample() {
    return (
        <Carousel className='carousel' fade>
            <Carousel.Item>
                <img
                    className="imgCarousel d-block w-100"
                    src={imgCarousel}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="imgCarousel d-block w-100"
                    src={imgCarousel2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="imgCarousel d-block w-100"
                    src={imgCarousel3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="imgCarousel d-block w-100"
                    src={imgCarousel4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;