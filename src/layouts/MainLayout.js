import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "../pages/home";
import { HomeHeader } from "../components/header";

const MainLayout = ({ match }) => {
    return (
        <>
            <HomeHeader/>

            <main className="app">
                <div className="master-container-fluid">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/home" component={ Home } />
                    </Switch>
                </div>
            </main>
        </>
    )
};

export default MainLayout;