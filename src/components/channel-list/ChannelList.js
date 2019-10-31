import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ChannelPlaceholders } from "./ChannelPlaceholder";
import { getChannels } from "../../services/channels";

class ChannelList extends React.Component {

    state = {
        channels: null
    };

    async componentDidMount() {
        let channels = await getChannels();
        this.setState({channels: channels})
    }

    renderChannels = () => {
        return this.state.channels.map((channel, index) => {
            return (
                <React.Fragment key={index}>
                    <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                        <div className="img-box img-box-sm box-rounded-sm">
                            <img src="https://cdn.limehd.tv/images/playlist_ctc_new_09_18.png" alt="" />
                        </div>
                        <div className="des">
                            <h6 className="title"><a href="#">{ channel.name }</a></h6>
                            <p className="sub-title"><a href="#">08:00 - 09:59</a></p>
                        </div>
                        <div className="hover-state d-flex justify-content-between align-items-center">
                                <span className="pointer play-btn-dark box-rounded-sm">
                                    <i className="play-icon"></i>
                                </span>
                            <div className="d-flex align-items-center">
                                    <span className="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            <use xlinkHref="#icon-heart-blank"></use>
                                        </svg>
                                    </span>
                                <span className="pointer dropdown-menu-toggle">
                                    <span className="icon-dot-nav-horizontal text-light"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        });
    };

    render() {

        if (this.state.channels == null) {
            return <ChannelPlaceholders count={5} />
        }

        return (
            <OverlayScrollbarsComponent>
                <div style={{width: '300px', maxHeight: '530px'}} className="">
                    <div className="owl-item">
                        <div className="item" id="sticky-sidebar">
                            <div className="inner-wrapper-sticky" style={{position: 'relative'}}>
                                {
                                    this.renderChannels()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        );
    }
}

export default ChannelList;