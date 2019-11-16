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

    return (
        <div className="video-container player-responsive" style={{width: '100%'}}>
            <ReactJWPlayer
                playerId='my-unique-id'
                playerScript='https://cdn.jwplayer.com/libraries/HLcL3DNo.js'
                playlist={playlist}
                isAutoPlay={true}

                onError={(e) => {
                    props.snack = enqueueSnackbar('Не удалось загрузить канал :(', {
                        variant: 'error',
                        persist: true,
                    });
                }}

                onReady={(e) => {
                    closeSnackbar(props.snack)
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