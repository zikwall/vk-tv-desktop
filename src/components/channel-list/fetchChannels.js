import { fetchChannelsPending, fetchChannelsError, fetchChannelsSuccess, setChannel } from '../../redux/actions';
import { apiFetch } from "../../services/api";

const fetchChannels = () => {
    return dispatch => {
        dispatch(fetchChannelsPending());

        apiFetch('/vktv/api/channels')
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }

                dispatch(fetchChannelsSuccess(res));
                dispatch(setChannel(res[1]));

                return res;
            })
            .catch(error => {
                dispatch(fetchChannelsError(error));
            })
    }
};

export default fetchChannels;