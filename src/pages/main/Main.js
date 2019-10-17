import React from 'react';
import { Player } from "../../components/player";

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="pt-e-40 pt-e-xl-50"></div>
                <div className="row">
                    <div className="col-md-9">
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
                    </div>
                    <div className="col-md-3">
                        <div className="album-top-box text-center text-md-left">
                            <h6 className="inactive-color">info</h6>
                            <h1 className="album-title">Первый канал</h1>
                            <div className="separator mb-4 mt-4">
                                <span className="separator-md"></span>
                            </div>
                            <div className="about">
                                <h4>Вечерний Галустян</h4>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                    himenaeos.
                                    Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a
                                    ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac
                                    nisi Lorem ipsum dolor sit amet
                                    Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam
                                    ac elit a ante commodo tristique. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;