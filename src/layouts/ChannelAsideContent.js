import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { ChannelList } from "../components/channel-list";
import { Search } from "@vkontakte/vkui";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import TrackVisibility from 'react-on-screen';

const ChannelAsideContent = () => {
    const [search, setSearch] = useState('');

    const onSearch = (search) => {
        setSearch(search);
    };

    return (
        <>
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
        </>
    );
};

export default ChannelAsideContent;