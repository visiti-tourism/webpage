import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function ImageGallerySlider() {
    return (
        <Carousel
            showStatus={false}
            showIndicators={true}
            autoPlay={true}
            interval={3000}
            transitionTime={1000}
            stopOnHover={true}
            infiniteLoop={true}>
            <div>
                <img src="https://picsum.photos/id/1018/1000/600/" alt="hello"/>
            </div>
            <div>
                <img src="https://picsum.photos/id/1015/1000/600/" alt="hello"/>
            </div>
            <div>
                <img src="https://picsum.photos/id/1019/1000/600/" alt="hello"/>
            </div>
        </Carousel>
    );
}

export default ImageGallerySlider;
