import * as types from "../types";

export const fetchChannelsPending = () => {
    return {
        type: types.FETCH_CHANNELS_PENDING,
        pending: true
    }
};

export const fetchChannelsSuccess = (channels) => {
    return {
        type: types.FETCH_CHANNELS_SUCCESS,
        channels: channels
    }
};

export const fetchChannelsError = (error) => {
    return {
        type: types.FETCH_CHANNELS_ERROR,
        error: error
    }
};
