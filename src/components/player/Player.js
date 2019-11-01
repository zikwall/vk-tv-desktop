import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import {getChannels, getChannelsPending, getSelectChannel} from "../../redux/reducers";
import { connect } from "react-redux";

class Player extends React.Component {
    render() {
        let { channel, pending } = this.props;

        if (pending === true) {
            return <>zzzz</>;
        }

        if (!channel.url) {
            return <>sss</>
        }

        const playlist = [{
            file: channel.url,
            image: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            autostart: true,
            mute: true
        }];

        return (
            <div className="player-responsive" style={{width: '100%'}}>
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