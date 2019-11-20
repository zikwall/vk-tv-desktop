import React from "react";

function getRandomInt(max) {
    let n = Math.floor(Math.random() * Math.floor(max));

    if (n < 1) {
        return getRandomInt(max);
    }

    return n;
}

export const Item = () => {
    let imgN = getRandomInt(3);

    return (
        <div className="item" style={{marginLeft: '10px'}}>
            <div className="radio">
                <div className="img-box-text-over lg box-rounded-lg">
                    <img src={`https://iconicthemes.net/adonis/assets/images/radios/radios-${imgN}.jpg`}
                         data-2x={`https://iconicthemes.net/adonis/assets/images/radios/radios-${imgN}@2x.jpg`}
                         alt="" />
                    <div className="hover-state show">
                        <div className="absolute-top-left pl-e-percent-10 pt-e-percent-8">
                            <h5 className="text-light">THE DEFINITIVE HITS</h5>
                        </div>
                        <div className="absolute-bottom-right pr-e-percent-8 pb-e-percent-8">
                            <a href="#" className="text-light"><
                                i className="icon-arrow-right2"></i> View all <span className="adonis-icon pl-1 icon-arrow icon-1x"><svg
                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                xlinkHref="#icon-see-all-arrow-right"></use></svg></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Item2 = () => {
    let imgN = getRandomInt(6);

    return (
        <div className="item" style={{width: '450px', marginLeft: '10px'}}>
            <div className="music-img-box">
                <div className="img-box box-rounded-sm">
                    <img className="retina" src={`https://iconicthemes.net/adonis/assets/images/videos/videos-${imgN}.jpg`}
                         data-2x={`https://iconicthemes.net/adonis/assets/images/videos/videos-${imgN}@2x.jpg`} alt="" />
                    <div className="hover-state">
                        <div className="absolute-bottom-left pl-e-20 pb-e-20">
                            <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                        </div>
                        <div className="absolute-top-right pr-e-20 pt-e-20">
                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg
                                    xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                    xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                        </div>
                    </div>
                </div>
                <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
            </div>
        </div>
    );
};

export const Multiple = () => {
    return (
        <div className="item" style={{width: '307.5', paddingLeft: '10px'}}>
            <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://iconicthemes.net/adonis/assets/images/hot-song/hot-3.jpg" alt="" />
                </div>
                <div className="des">
                    <h6 className="title fs-2"><a href="#">Stirring of a fool</a></h6>
                    <p className="sub-title"><a href="#">Rachel Platten</a></p>
                </div>
                <div className="hover-state d-flex justify-content-between align-items-center">
                    <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                    <div className="d-flex align-items-center">
                            <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg
                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                xlinkHref="#icon-heart-blank"></use></svg></span>
                        <span className="pointer dropdown-menu-toggle"><span
                            className="icon-dot-nav-horizontal text-light"></span></span>
                    </div>
                </div>
            </div>
            <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://iconicthemes.net/adonis/assets/images/hot-song/hot-6.jpg" alt="" />
                </div>
                <div className="des">
                    <h6 className="title fs-2"><a href="#">The Separation</a></h6>
                    <p className="sub-title"><a href="#">Rachel Platten</a></p>
                </div>
                <div className="hover-state d-flex justify-content-between align-items-center">
                    <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                    <div className="d-flex align-items-center">
                            <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg
                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                xlinkHref="#icon-heart-blank"></use></svg></span>
                        <span className="pointer dropdown-menu-toggle"><span
                            className="icon-dot-nav-horizontal text-light"></span></span>
                    </div>
                </div>
            </div>
            <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://iconicthemes.net/adonis/assets/images/hot-song/hot-9.jpg" alt="" />
                </div>
                <div className="des">
                    <h6 className="title fs-2"><a href="#">The Separation</a></h6>
                    <p className="sub-title"><a href="#">Rachel Platten</a></p>
                </div>
                <div className="hover-state d-flex justify-content-between align-items-center">
                    <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                    <div className="d-flex align-items-center">
                            <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg
                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                xlinkHref="#icon-heart-blank"></use></svg></span>
                        <span className="pointer dropdown-menu-toggle"><span
                            className="icon-dot-nav-horizontal text-light"></span></span>
                    </div>
                </div>
            </div>
            <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://iconicthemes.net/adonis/assets/images/hot-song/hot-12.jpg" alt="" />
                </div>
                <div className="des">
                    <h6 className="title fs-2"><a href="#">The Separation</a></h6>
                    <p className="sub-title"><a href="#">Rachel Platten</a></p>
                </div>
                <div className="hover-state d-flex justify-content-between align-items-center">
                    <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                    <div className="d-flex align-items-center">
                            <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg
                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                xlinkHref="#icon-heart-blank"></use></svg></span>
                        <span className="pointer dropdown-menu-toggle"><span
                            className="icon-dot-nav-horizontal text-light"></span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};