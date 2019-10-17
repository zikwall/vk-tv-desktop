import React from 'react';
import { Player } from "../../components/player";
import { Teleprogram } from "./components/teleprogram";
import { Description } from "./components/description";

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
                            <br />
                            <div className="pb-4 d-inline-block album-likes">
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
                            </div>
                        </div>

                        <Teleprogram />
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