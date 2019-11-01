import React from 'react';
import { Placeholder, Button } from "@vkontakte/vkui";
import Icon56VideoOutline from '@vkontakte/icons/dist/56/video_outline';

import './index.css';
import Heart from "../icons/Heart";

const Underdeveloipment = () => {
    return (
        <div style={{height: '300px'}}>
            <Placeholder
                icon={<Icon56VideoOutline />}
                title="Раздел находится в разработке"
                action={<Button size="l">Жду с нетерпением!</Button>}
            >
                Скоро здесь появится что-то интересное. Загляните немного позже! Спасибо { <Heart /> }
            </Placeholder>
        </div>
    )
};

export default Underdeveloipment;