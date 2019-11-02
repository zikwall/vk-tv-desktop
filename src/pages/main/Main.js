import React from 'react';
import { Player } from "../../components/player";
import { TVprogram } from "./components/tvprogram";
import { Description } from "./components/description";
import { UsersStack, Cell, List, Div } from "@vkontakte/vkui";
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="pt-e-10 pt-e-xl-50"></div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="cards">
                            <div className="card-bodys">
                                <Player />
                            </div>
                        </div>
                        <List>
                            <Cell
                                asideContent={
                                    <UsersStack
                                        photos={[
                                            'https://sun9-9.userapi.com/c847219/v847219582/1eac9d/jxtvce2MwZk.jpg?ava=1',
                                            'https://pp.userapi.com/c834200/v834200315/1039ea/iFd9WUOdmDo.jpg?ava=1',
                                            'https://sun9-20.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1',
                                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
                                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
                                            'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
                                        ]}
                                        size="m"
                                        count={3}
                                        vertical
                                    >Алексей, Илья, Михаил<br />и ещё 3 друга смотрят трансляцию</UsersStack>
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

                        <TVprogram />
                    </div>
                    <div className="col-md-5">
                        <Description />
                    </div>
                </div>
            </>
        )
    }
}

export default Main;