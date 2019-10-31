import { combineReducers } from 'redux'

import { getChannels, getChannelsError, getChannelsPending, channelsReducer } from "./channels";

export default combineReducers({
    channelsReducer
})

export {
    getChannelsPending, getChannelsError, getChannels
}