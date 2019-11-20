import React from 'react';
import { Group, Gallery } from "@vkontakte/vkui";
import { Item, Multiple } from "./Example";

const VkSlide = () => {
    return (
        <>
            <Gallery
                slideWidth="20%"
                style={{ height: 140 }}
                bullets="dark"
            >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Gallery>

            <Gallery
                slideWidth="30%"
                style={{ height: 300 }}
                bullets="dark"
            >
                <Multiple />
                <Multiple />
                <Multiple />
                <Multiple />
                <Multiple />
                <Multiple />
                <Multiple />
                <Multiple />
            </Gallery>
        </>
    )
};