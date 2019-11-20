import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Item, Multiple } from "./Example";

const Owl = () => {
    return (
        <OwlCarousel
            className="owl-theme-adonis owl-loaded owl-drag"
            loop
            margin={10}
            nav={false}
            autoheight={true}
            height={150}
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </OwlCarousel>
    );
};

export default Owl;