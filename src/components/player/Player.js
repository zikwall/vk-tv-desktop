import React from 'react';
import ReactJWPlayer from 'react-jw-player';

class Player extends React.Component {

    render() {
        const playlist = [{
            file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
            image: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            label: '576'
        }, {
            file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
            image: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            label: '720 HD'
        }];

        return (
            <div className="player-responsive" style={{width: '100%'}}>
                <ReactJWPlayer
                    playerId='my-unique-id'
                    playerScript='https://cdn.jwplayer.com/libraries/HLcL3DNo.js'
                    playlist={playlist}
                />
            </div>
        )
    }
}

export default Player;