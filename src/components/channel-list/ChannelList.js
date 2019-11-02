import React, { useEffect, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ChannelPlaceholders } from "./ChannelPlaceholder";

import {Group, Cell, List, Avatar, Progress, Search, Div} from "@vkontakte/vkui";
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchChannelsAction from './fetchChannels';
import { getChannelsError, getChannels, getChannelsPending } from '../../redux/reducers';
import { setChannel } from "../../redux/actions/channels";

const ChannelList = (props) => {
    const [search, setSearch] = useState("");
    const [stateChannels, setStateChannels] = useState([]);

    useEffect( async () => {
        await props.fetchChannels();
        setStateChannels(props.channels);
    }, []);

    const handleChannelClick = (e) => {
        e.preventDefault();
        let epg_id = e.currentTarget.dataset.epgid;
        let channel_id = e.currentTarget.dataset.channelid;

        props.selectChannel(props.channels[channel_id])
    };

    const onSearch = (search) => {
        setSearch(search);
    };

    const allChannels = (channels) => {
        const ss = search.toLowerCase();
        return channels.filter(({name}) => name.toLowerCase().indexOf(ss) > -1);
    };

    const renderChannels = (channels) => {

        return channels.map((channel, index) => {
            return (
                <Cell key={index}
                      before={<Avatar type="app" src="https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg" />}
                      description="08:00 - 09:59"
                      asideContent={
                          <a href="#">
                              <Icon24MoreHorizontal fill="var(--accent)"/>
                          </a>
                      }
                >

                    <a href="#"
                       data-channelid={ index }
                       data-epgid={ channel.epg_id }
                       onClick={ handleChannelClick }> { channel.name }
                    </a>
                    <Progress value={randomInteger(0, 100)} />
                </Cell>
            )
        });
    };


    const { channels, pending } = props;

    if (pending === true) {
        return <ChannelPlaceholders count={5} />
    }

    return (
        <>
            <div style={{marginBottom: '5px'}}>
                <Search value={ search } onChange={ onSearch } theme="default" />
            </div>

            <OverlayScrollbarsComponent>
                <div style={{width: '300px', maxHeight: '530px'}}>
                    <div id="sticky-sidebar">
                        <div className="inner-wrapper-sticky" style={{position: 'relative'}}>
                            <Group>
                                <List>
                                    {
                                        renderChannels(allChannels(channels))
                                    }
                                </List>
                            </Group>
                        </div>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </>
    );
};

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const mapStateToProps = state => ({
    error: getChannelsError(state),
    channels: getChannels(state),
    pending: getChannelsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchChannels: fetchChannelsAction,
    selectChannel: setChannel,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);