import React from 'react';
import { Group, Gallery } from "@vkontakte/vkui";
import Slick, { SlickMultiple, Slick2, Slick3 } from "./components/Slick";

class Home extends React.Component {


    render() {
        return (
            <>
                <Slick />
                <br /><br />
                <SlickMultiple/>
                <br /><br />
                <Slick2/>
                <br /><br />
                <Slick3/>
            </>
        );
    }
}

export default Home;