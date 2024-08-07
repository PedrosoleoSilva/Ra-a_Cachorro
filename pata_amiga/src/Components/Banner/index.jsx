import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="banner-container">
            <Slider {...settings} className='banner'>
                <div>
                    <img src="./assets/banner2.png" alt="Imagem 1" />
                </div>
                <div>
                    <img src="./assets/bannerAdocao.png" alt="Imagem 2" />
                </div>
                <div>
                    <img src="./assets/bannerConsciente.png" alt="Imagem 3" />
                </div>
                <div>
                    <img src="./assets/pata2.jpg" alt="Imagem 4" />
                </div>
            </Slider>
        </div>
    );
}

export default Banner;
