import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import { getChannels, getChannelsPending, getSelectChannel } from "../../redux/reducers";
import { ScreenSpinner } from "@vkontakte/vkui";
import { connect } from "react-redux";
import { useSnackbar, WithSnackbarProps } from 'notistack';
import './index.css';

const Player = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    let { channel, pending } = props;

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

    const onReady = (event) => {
        const player = window.jwplayer('my-unique-id');
        closeSnackbar(props.snack)
    };

    const onVideoLoad = (event) => {
        closeSnackbar(props.snack)
    };

    return (
        <div className="video-container player-responsive" style={{width: '100%'}}>
            <ReactJWPlayer
                playerId='my-unique-idxxxwsws'
                playerScript='https://cdn.jwplayer.com/libraries/31C1vqmP.js'
                playlist={playlist}
                isAutoPlay={true}
                onReady={ onReady }
                onError={(e) => {
                    props.snack = enqueueSnackbar('Не удалось загрузить канал :(', {
                        variant: 'error',
                        persist: true,
                    });
                }}
                onVideoLoad={ onVideoLoad }
                advertising={{
                    client:  "googima",
                    schedule: {
                        pre:{
                            offset: "pre",
                            tag: "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/14008522/video-jwp&description_url=https%3A%2F%2Flookandcook.com&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=400x300|640x480|970x90&min_ad_duration=10000&max_ad_duration=15000&unviewed_position_start=1"
                        }
                    },
                    vpaidmode: "insecure"
                }}
            />
        </div>
    )
};

Player.defaultProps = {
    snack: null
};

Player.propTypes = {
    snack: PropTypes.instanceOf(WithSnackbarProps)
};

const mapStateToProps = state => ({
    channels: getChannels(state),
    pending: getChannelsPending(state),
    channel: getSelectChannel(state),
});

export default connect(mapStateToProps)(Player);