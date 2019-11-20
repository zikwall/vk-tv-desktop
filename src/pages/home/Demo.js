import React from 'react';
import Slick, { SlickMultiple, Slick2, Slick3 } from "./components/Slick";

class Demo extends React.Component {


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

export default Demo;