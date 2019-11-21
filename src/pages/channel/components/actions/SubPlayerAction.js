import React from "react";
import { Cell, HorizontalScroll, List, UsersStack } from "@vkontakte/vkui";

const SubPlayerAction = () => {
    return (
        <HorizontalScroll>
            <List>
                <Cell
                    asideContent={
                        <UsersStack
                            photos={[
                                'https://sun9-6.userapi.com/c846121/v846121540/195e4d/17NeSTKMR1o.jpg?ava=1',
                                'https://sun9-30.userapi.com/c845017/v845017447/1773bb/Wyfyi8-7e5A.jpg?ava=1',
                                'https://sun9-25.userapi.com/c849432/v849432217/18ad61/0UFtoEhCsgA.jpg?ava=1'
                            ]}
                        >Иван и ещё 2 ваших друга подписаны</UsersStack>
                    }
                >
                                <span className="adonis-icon pr-2 icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <use xlinkHref="#icon-heart-blank"></use>
                                    </svg>
                                </span>
                    <span className="pr-2">1256</span>
                    <span className="adonis-icon pr-2 icon-1x">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <use xlinkHref="#icon-brand-play"></use>
                                    </svg>
                                </span>
                    <span>125K</span>
                </Cell>
            </List>
        </HorizontalScroll>
    );
};

export default SubPlayerAction;