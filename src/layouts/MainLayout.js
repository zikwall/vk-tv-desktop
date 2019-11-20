import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Demo } from "../pages/home";
import { HomeHeader } from "../components/header";

const MainLayout = ({ match }) => {
    return (
        <>
            <HomeHeader/>

            <main className="app">
                <div className="master-container-fluid">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/home" component={ Home } />
                        <Route path="/home/about" component={ About } />
                        <Route path="/home/demo" component={ Demo } />
                    </Switch>
                </div>
            </main>
        </>
    )
};

export default MainLayout;