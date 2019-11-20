import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Channel } from "../pages/channel";
import {Header} from "../components/header";

const ChannelLayout = () => {
    return (
        <>
            <Header />

            <main className="app">
                <div className="master-container-fluid">
                    <Switch>
                        <Route path="/" component={ Channel } />
                    </Switch>
                </div>
            </main>
        </>
    )
};

export default ChannelLayout;