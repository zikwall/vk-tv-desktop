import React from 'react';
import { Aside } from "../../containers/aside";

const Header = () => {
    return (
        <header id="site-header" className="site-header mb-1">
            <div className="master-container-fluid header-inner">
                <div className="row">
                    <div className="col-2 col-md-4 d-flex align-items-center">
                    </div>
                    <div className="col-auto col-md-4 align-items-center justify-content-center d-none d-md-flex">
                        <div className="brand" id="channel-name">
                            <a className="brand d-flex align-items-center" href="/">
                                    <span className="adonis-icon mr-md-2 color-dark mr-1 icon-5x">
                                        <img style={{width: '26px'}} src="https://cdn.limehd.tv/images/playlist_1channel.png" />
                                    </span>
                                <strong className="p-1 fs-6 fs-lg-8">Росиия 24</strong>
                            </a>
                        </div>
                    </div>
                    <div className="col-auto d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary ml-auto">
                        <div className="mr-2">
                            <Aside />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;