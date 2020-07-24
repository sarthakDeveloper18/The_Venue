import React from 'react';
import Slider from "react-slick";
import SlideOne from '../../resources/images/slide_one.jpg';
import SlideTwo from '../../resources/images/slide_two.jpg';
import SlideThree from '../../resources/images/slide_three.jpg';

const Carousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true
    }
    return(
        <div className = 'carrousel_wrapper' style = {{overflow: 'hidden', height: `${window.innerHeight}px`}}>
            <Slider {...settings}>
                <div>
                    <div className = 'carrousel_image' style = {{height: `${window.innerHeight}px`, background: `url(${SlideOne})`}}>
                    
                    </div>
                </div>
                <div>
                    <div className = 'carrousel_image' style = {{height: `${window.innerHeight}px`, background: `url(${SlideTwo})`}}>
                        
                    </div>
                </div>
                <div>
                    <div className = 'carrousel_image' style = {{height: `${window.innerHeight}px`, background: `url(${SlideThree})`}}>
                        
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel