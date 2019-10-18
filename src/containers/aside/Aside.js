import React from 'react';
import './index.css';
import {ChannelList} from "../../components/channel-list";

class Aside extends React.Component {
    state = {
        isPulled: false
    };

    toogle = () => {
        this.setState({
            isPulled: !this.state.isPulled
        });
    };

    render() {
        return (
            <>
                <div className="adonis-player-wrap">
                    <a onClick={ this.toogle } className="toggle-off-canvas" tabIndex="0">
                    <span className="adonis-icon icon-4x">
                         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 59 32">
                              <path d="M16 4.571h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0zM2.286 0c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0zM57.143 13.714h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0zM2.286 13.714c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0zM57.143 27.429h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0zM2.286 27.429c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0z"></path>
                         </svg>
                    </span>
                    </a>

                    <div className={ "off-canvas-overlay" + (this.state.isPulled ? ' overlay-on' : '')}></div>

                    <div className={ "adonis-playlist off-canvas off-canvas-right d-flex flex-column" + (this.state.isPulled ? ' show' : '')}>
                        <div className="close-header">
                            <a onClick={this.toogle} className="close-offcanvas m-2">
                            <span className="adonis-icon icon-3x">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24">
                                    <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
                                </svg>
                            </span>
                            </a>
                        </div>

                        <div className="col-md-3 flex-column-sidebar-md sidebar">
                            <div className="widget">
                                <h4>Go Moblie</h4>
                                <div className="mobile-apps mb-3 mt-4">
                                    <ul className="list-inline d-inline-flex">
                                        <li className="mr-2">
                                            <a target="_blank" href="https://play.google.com">
                                                <img src={require('../../assets/media/google.png')} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://itunes.apple.com">
                                                <img src={require('../../assets/media/ios.png')} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <ChannelList />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Aside;