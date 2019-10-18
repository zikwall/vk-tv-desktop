import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const ChannelList = () => {

    let renderChannels = () => {
        return ([...Array(15)].map(() => {
            return (
                <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://cdn.limehd.tv/images/playlist_ctc_new_09_18.png" alt="" />
                </div>
                <div className="des">
                    <h6 className="title"><a href="#">Стс</a></h6>
                    <p className="sub-title"><a href="#">Sub text here</a></p>
                </div>
                <div className="hover-state d-flex justify-content-between align-items-center">
                                <span className="pointer play-btn-dark box-rounded-sm"><i
                                    className="play-icon"></i></span>
                    <div className="d-flex align-items-center">
                                    <span className="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                            xlinkHref="#icon-heart-blank"></use></svg>
                                    </span>
                        <span className="pointer dropdown-menu-toggle"><span
                            className="icon-dot-nav-horizontal text-light"></span></span>
                    </div>
                </div>
            </div>)
        }))
    };

    return (
        <OverlayScrollbarsComponent>
            <div style={{width: '300px', maxHeight: '530px'}} className="">
                <div className="owl-item">
                    <div className="item" id="sticky-sidebar">
                        <div className="inner-wrapper-sticky" style={{position: 'relative'}}>
                            <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow active">
                                <div className="img-box img-box-sm box-rounded-sm">
                                    <img src="https://cdn.limehd.tv/images/playlist_rt.png" alt="" />
                                </div>
                                <div className="des">
                                    <h6 className="title"><a href="#">RT</a></h6>
                                    <p className="sub-title"><a href="#">Sub text here</a></p>
                                </div>
                                <div className="hover-state d-flex justify-content-between align-items-center">
                                <span className="pointer play-btn-dark box-rounded-sm"><i
                                    className="play-icon"></i></span>
                                    <div className="d-flex align-items-center">
                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg
                                        xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                        xlinkHref="#icon-heart-blank"></use></svg></span>
                                        <span className="pointer dropdown-menu-toggle"><span
                                            className="icon-dot-nav-horizontal text-light"></span></span>
                                    </div>
                                </div>
                            </div>

                            {
                                renderChannels()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </OverlayScrollbarsComponent>
    );
};

export default ChannelList;