import { fetchChannelsPending, fetchChannelsError, fetchChannelsSuccess } from '../../redux/actions';
import { apiFetch } from "../../services/api";

const fetchChannels = () => {
    return dispatch => {
        dispatch(fetchChannelsPending());

        fetch('http://tv.zikwall.ru/vktv/api/channels')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }

                dispatch(fetchChannelsSuccess(res));

                return res;
            })
            .catch(error => {
                dispatch(fetchChannelsError(error));
            })
    }
};

export default fetchChannels;