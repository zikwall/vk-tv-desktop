import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';
import { ChannelList } from "../../components/channel-list";
import { Search } from "@vkontakte/vkui";
import { MenuLite } from "../../components/icons";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import TrackVisibility from 'react-on-screen';
import classname  from 'classnames';

const Aside = () => {
    const [pulled, setPulled] = useState(false);
    const [search, setSearch] = useState('');

    const toggle = () => {
        setPulled(!pulled);
    };

    const onSearch = (search) => {
        setSearch(search);
    };

    const isPulled = () => {
        return pulled === true;
    };

    return (
        <>
            <div className="adonis-player-wrap">
                <a onClick={ toggle } className="toggle-off-canvas" tabIndex="0">
                    <span className="adonis-icon icon-4x">
                         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 59 32">
                              <path d="M16 4.571h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0zM2.286 0c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0zM57.143 13.714h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0zM2.286 13.714c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0zM57.143 27.429h-41.143c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286v0h41.143c1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286v0zM2.286 27.429c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c1.262 0 2.286-1.023 2.286-2.286v0c0-1.262-1.023-2.286-2.286-2.286v0z"></path>
                         </svg>
                    </span>
                </a>

                <div className={classname({
                    'off-canvas-overlay': true,
                    'overlay-on': isPulled()
                })}></div>

                <div className={ classname({
                    'adonis-playlist off-canvas off-canvas-right d-flex flex-column': true,
                    'show': isPulled()
                })}>
                    <div className="close-header">
                        <a onClick={ toggle } className="close-offcanvas m-2">
                            <span className="adonis-icon icon-3x">
                                <MenuLite />
                            </span>
                        </a>
                    </div>

                    <div className="col-md-3 flex-column-sidebar-md sidebar">
                        <div className="col-md-12">
                            <div className="footer-about">
                                <div className="widget">
                                    <h5 className="widget-title">Navigation</h5>
                                    <ul className="list-inline vertical-list">
                                        <li><NavLink to="/home">Go to Home</NavLink></li>
                                        <li><NavLink to="/help">Help &amp; Support</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        <li><NavLink to="/privacy">Terms &amp; Privacy</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style={{marginBottom: '5px'}}>
                            <Search value={ search } onChange={ onSearch } theme="light" />
                        </div>

                        { /* save memory
                        <div style={{height: '100px', maxHeigh: '100px'}}>
                            <div style={{overflowY: 'auto'}}>

                                <TrackVisibility>
                                    <ChannelList search={ search } />
                                </TrackVisibility>
                            </div>
                        </div>
                        */ }

                        <OverlayScrollbarsComponent
                            options={{
                                scrollbars: {autoHide: "leave"}
                            }}
                        >
                            <TrackVisibility>
                                {({ isVisible }) =>

                                    <ChannelList search={ search } />
                                }
                            </TrackVisibility>
                        </OverlayScrollbarsComponent>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Aside;