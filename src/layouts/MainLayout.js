import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About } from "../pages/home";
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
                    </Switch>
                </div>
            </main>
        </>
    )
};

export default MainLayout;