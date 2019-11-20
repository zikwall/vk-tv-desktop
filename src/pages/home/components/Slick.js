import React from 'react';
import { Item, Multiple, Item2 } from "./Example";
import Slider from "react-slick";

const Slick = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        //adaptiveHeight: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Slider>
    );
};

const SlickMultiple = () => {
    let settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        //adaptiveHeight: true,
        //centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings2}>
            <Multiple />
            <Multiple />
            <Multiple />
            <Multiple />
            <Multiple />
            <Multiple />
            <Multiple />
        </Slider>
    );
};

export const Slick2 = () => {
    let settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        //adaptiveHeight: true,
        //centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    //centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    //variableWidth: '150px',
                    //rows: 1,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings3}>
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
        </Slider>
    );
};

export {
    SlickMultiple
}

export default Slick;