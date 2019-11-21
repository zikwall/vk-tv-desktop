import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Demo } from "../pages/home";
import { Header } from "../components/header";
import { RubberBand } from "../components/animations";
import { Aside } from "../containers/aside";
import HomeAsideContent from "./HomeAsideContent";

const MainLayout = ({ match }) => {
    return (
        <>
            <Header>
                <div className="row">
                    <div className="col-2 col-md-4 d-flex align-items-center">
                    </div>
                    <div className="col-auto col-md-4 align-items-center justify-content-center d-none d-md-flex">
                        <RubberBand>
                            <div className="brand">
                                <a className="brand d-flex align-items-center" href="/">
                                    <strong className="p-1 fs-6 fs-lg-8">Welcome to Home</strong>
                                </a>
                            </div>
                        </RubberBand>
                    </div>
                    <div className="col-auto d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary ml-auto">
                        <div className="mr-2">
                            <Aside>
                                <HomeAsideContent />
                            </Aside>
                        </div>
                    </div>
                </div>
            </Header>

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