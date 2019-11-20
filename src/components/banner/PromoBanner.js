import React from 'react';
import PromoBanner from "@vkontakte/vkui/dist/es6/components/PromoBanner/PromoBanner";
import { FixedLayout } from "@vkontakte/vkui";

const Banner = (props) => {

    const promoBannerProps = {
        title: 'Мобильное приложение ВКонтакте ТВ',
        domain: 'vk.com',
        ctaText: 'Перейти',
        advertisingLabel: 'Реклама',
        iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
        description: 'Описание рекламы',
        ageRestriction: 14
    };

    return (
        <FixedLayout vertical="bottom">
            <PromoBanner bannerData={ promoBannerProps }/>
        </FixedLayout>
    )
};

export default Banner;