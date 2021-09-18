import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {SliderImageItem} from "./ImageGallerySlider.styled";

function ImageGallerySlider() {
    return (
        <Carousel
            showStatus={false}
            showIndicators={true}
            autoPlay={true}
            showThumbs={false}
            interval={3000}
            transitionTime={1000}
            stopOnHover={true}
            infiniteLoop={true}>
            <div>
                <SliderImageItem src="https://picsum.photos/id/1018/1000/600/"/>
            </div>
            <div>
                <SliderImageItem src="https://picsum.photos/id/1015/1000/600/"/>
            </div>
            <div>
                <SliderImageItem src="https://picsum.photos/id/1019/1000/600/"/>
            </div>
        </Carousel>
    );
}

export default ImageGallerySlider;
