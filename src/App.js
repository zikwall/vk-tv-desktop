import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '@vkontakte/vkui/dist/vkui.css';
import { Main } from './pages/main';
import { Header } from "./components/header";
import { SVG } from "./components/svg";
import { FixedLayout } from "@vkontakte/vkui";
import { SnackbarProvider } from 'notistack';
import PromoBanner from "@vkontakte/vkui/dist/es6/components/PromoBanner/PromoBanner";

const promoBannerProps = {
    title: 'Мобильное приложение ВКонтакте ТВ',
    domain: 'vk.com',
    ctaText: 'Перейти',
    advertisingLabel: 'Реклама',
    iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
    description: 'Описание рекламы',
    ageRestriction: 14
};

const App = () =>  {
    return (

        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
            <Header />
            <main className="app">
                <div className="master-container-fluid">
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Switch>
                            <Route exact path="/" component={ Main } />
                            <Route path="/main" component={ Main } />
                        </Switch>
                    </BrowserRouter>
                </div>
            </main>

            <SVG />

            <FixedLayout vertical="bottom">
                <PromoBanner bannerData={promoBannerProps} />
            </FixedLayout>
        </SnackbarProvider>
    );
};

export default App;
