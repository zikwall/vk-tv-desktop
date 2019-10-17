import React from 'react';

const Teleprogram = () => {
    return (
        <>
            <ul className="nav mb-3 product-tabs" id="pills-tab" role="tablist">
                <li className="nav-item ">
                    <a className="active nav-link f-w-600" id="single-songs-tab" data-toggle="pill"
                       href="#teleprog" role="tab" aria-controls="single-songs"
                       aria-selected="true">ТЕЛЕПРОГРАММА
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link f-w-600" id="single-rating-tab" data-toggle="pill" href="#live"
                       role="tab" aria-controls="single-rating" aria-selected="false">ЖИВОЕ ОБЩЕНИЕ
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade active show" id="teleprog" role="tabpanel"
                     aria-labelledby="single-songs-tab">
                    <ul className="adonis-album-list pb-5 pt-e-30">
                        <li>
                            <div className="item-number h6 inactive-color">#</div>
                            <div className="item-title h6 inactive-color">Name</div>
                            <div className="item-genre h6 inactive-color">Genre</div>
                            <div className="item-duration h6 inactive-color">Time</div>
                            <div className="item-tools">
                                <span className="adonis-icon h6 inactive-color icon-1x">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <use xlinkHref="#icon-heart-blank"></use></svg>
                                </span>
                            </div>
                        </li>


                        <li className="item">
                            <div className="item-number">
                                <span className="hover-hide">01</span>
                            </div>
                            <div className="item-title">Вечерние новости (с субтитрами)</div>
                            <div className="item-genre"><span className="hover-hide hover-lg-show">Classical</span>
                            </div>
                            <div className="item-duration"><span className="hover-hide">14:13</span></div>
                            <div className="item-tools">
                                <span className="hover-hide">1245</span>
                                <div className="hover-show d-flex flex-nowrap hover-tools">
                                        <span className="adonis-icon icon-1x">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                <use xlinkHref="#icon-heart-blank"></use>
                                            </svg>
                                        </span>
                                    <span className="ml-3 adonis-icon icon-3x"><svg
                                        xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                        xlinkHref="#icon-plus"></use></svg>
                                    </span>
                                    <span className="ml-3 adonis-icon pointer dropdown-menu-toggle">
                                        <span className="adonis-icon icon-4x"><
                                            svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            <use xlinkHref="#icon-horizontal-dots"></use>
                                        </svg>
                                    </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="tab-pane fade" id="another-tab" role="tabpanel" aria-labelledby="single-songs-tab">
                    comming soon...
                </div>
            </div>
        </>
    );
};

export default Teleprogram;