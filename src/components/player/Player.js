import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import { getChannels, getChannelsPending, getSelectChannel } from "../../redux/reducers";
import { ScreenSpinner } from "@vkontakte/vkui";
import { connect } from "react-redux";
import './index.css';

class Player extends React.Component {
    render() {
        let { channel, pending } = this.props;

        if (pending === true) {
            return <ScreenSpinner />;
        }

        if (!channel.url) {
            return <ScreenSpinner />
        }

        const playlist = [{
            file: channel.url,
            image: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            autostart: true,
            mute: true
        }];

        return (
            <div className="video-container player-responsive" style={{width: '100%'}}>
                <ReactJWPlayer
                    playerId='my-unique-id'
                    playerScript='https://cdn.jwplayer.com/libraries/HLcL3DNo.js'
                    playlist={playlist}
                    isAutoPlay={true}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    channels: getChannels(state),
    pending: getChannelsPending(state),
    channel: getSelectChannel(state),
});

export default connect(mapStateToProps)(Player);