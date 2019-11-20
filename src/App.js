import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SVG } from "./components/svg";
import { SnackbarProvider } from 'notistack';
import { ChannelLayout, MainLayout } from "./layouts";

const App = () =>  {
    return (
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={ MainLayout } />
                    <Route path="/online" component={ ChannelLayout } />
                    <Route path="/" component={ MainLayout } />
                </Switch>
            </BrowserRouter>

            <SVG />
        </SnackbarProvider>
    );
};

export default App;
