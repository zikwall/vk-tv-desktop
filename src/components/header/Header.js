import React from 'react';
import { Aside } from "../../containers/aside";
import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';
import { getChannelsPending, getSelectChannel } from "../../redux/reducers";
import { connect } from "react-redux";

const Header = (props) => {
    const rubberBandAnimation = keyframes`${rubberBand}`;
    const RubberBandDiv = styled.div`
        animation: 1s ${rubberBandAnimation};
    `;

    let { channel, pending } = props;
    let channelName = 'Loading...';

    if (pending === false) {
        channelName = channel.name;
    }

    return (
        <header id="site-header" className="site-header mb-1">
            <div className="master-container-fluid header-inner">
                <div className="row">
                    <div className="col-2 col-md-4 d-flex align-items-center">
                    </div>
                    <div className="col-auto col-md-4 align-items-center justify-content-center d-none d-md-flex">
                        <RubberBandDiv>
                            <div className="brand">
                                <a className="brand d-flex align-items-center" href="/">
                                    <span className="adonis-icon mr-md-2 color-dark mr-1 icon-5x">
                                        <img style={{width: '26px'}} src="https://cdn.limehd.tv/images/playlist_1channel.png" />
                                    </span>
                                    <strong className="p-1 fs-6 fs-lg-8">{ channelName }</strong>
                                </a>
                            </div>
                        </RubberBandDiv>
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

const mapStateToProps = state => ({
    pending: getChannelsPending(state),
    channel: getSelectChannel(state),
});

export default connect(mapStateToProps)(Header);