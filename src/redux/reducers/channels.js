import {
    FETCH_CHANNELS_ERROR, FETCH_CHANNELS_SUCCESS, FETCH_CHANNELS_PENDING
} from '../types';

const initialState = {
    pending: false,
    channels: [],
    error: null
};

export function channelsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CHANNELS_PENDING:
            
            return {
                ...state,
                pending: true
            };
            
        case FETCH_CHANNELS_SUCCESS:
            return {
                ...state,
                pending: false,
                channels: action.properties
            };
            
        case FETCH_CHANNELS_ERROR:
            
            return {
                ...state,
                pending: false,
                error: action.error
            };
            
        default:
            return state;
    }
}

export const getChannels = state => state.channels;
export const getChannelsPending = state => state.pending;
export const getChannelsError = state => state.error;