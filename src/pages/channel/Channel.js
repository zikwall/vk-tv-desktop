import React from 'react';
import { Player } from "../../components/player";
import { Description } from "./components/description";
import { Underdevelopment } from "../../components/underdevelopment";

class Channel extends React.Component {
    render() {
        return (
            <>
                <div className="pt-e-10 pt-e-xl-50"></div>

                <div className="row">
                    <div className="col-md-7">
                        <div className="cards">
                            <div className="card-bodys">
                                <Player />
                            </div>
                        </div>
                        <Underdevelopment />
                    </div>
                    <div className="col-md-5">
                        <Description />
                    </div>
                </div>
            </>
        )
    }
}

export default Channel;