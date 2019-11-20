import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {


    render() {
        return (
            <>
                Home Page <Link to="/online">Go To Watch</Link>
            </>
        );
    }
}

export default Home;