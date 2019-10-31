import React, { useEffect } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ChannelPlaceholders } from "./ChannelPlaceholder";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchChannelsAction from './fetchChannels';
import { getChannelsError, getChannels, getChannelsPending } from '../../redux/reducers';
import { setChannel } from "../../redux/actions/channels";

const ChannelList = (props) => {
    useEffect( () => {
        props.fetchChannels();
    }, []);

    const handleChannelClick = (e) => {
        e.preventDefault();
        let epg_id = e.currentTarget.dataset.epgid;
        let channel_id = e.currentTarget.dataset.channelid;

        props.selectChannel(props.channels[channel_id])
    };

    const Item = ({ i, epg_id, name, url }) => {
        return (
            <>
                <div className="img-box img-box-sm box-rounded-sm">
                    <img src="https://cdn.limehd.tv/images/playlist_ctc_new_09_18.png" alt="" />
                </div>
                <div className="des">
                    <h6 className="title">
                        <a
                            data-channelid={ i }
                            data-epgid={ epg_id }
                            href="#"
                            onClick={ handleChannelClick }>{ name }
                        </a>
                    </h6>
                    <p className="sub-title">
                        08:00 - 09:59
                    </p>
                </div>
            </>
        );
    };

    const Actions = () => {
        return (
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
        );
    };

    const renderChannels = (channels) => {

        return channels.map((channel, index) => {
            return (
                <React.Fragment key={ index }>
                    <div className="img-box-horizontal music-img-box h-g-bg h-d-shadow">

                        { Item({ i: index, ...channel }) }

                        { Actions() }

                    </div>
                </React.Fragment>
            )
        });
    };


    const { channels, pending } = props;

    if (pending === true) {
        return <ChannelPlaceholders count={5} />
    }

    return (
        <OverlayScrollbarsComponent>
            <div style={{width: '300px', maxHeight: '530px'}} className="">
                <div className="owl-item">
                    <div className="item" id="sticky-sidebar">
                        <div className="inner-wrapper-sticky" style={{position: 'relative'}}>
                            {
                                renderChannels(channels)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </OverlayScrollbarsComponent>
    );

};

const mapStateToProps = state => ({
    error: getChannelsError(state),
    channels: getChannels(state),
    pending: getChannelsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchChannels: fetchChannelsAction,
    selectChannel: setChannel,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);