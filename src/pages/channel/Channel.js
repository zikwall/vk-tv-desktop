import React from 'react';
import { Player } from "../../components/player";
import { Description } from "./components/description";
import { ProgramList } from "../../components/program";
import { KittenLike } from "../../components/like";

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
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <KittenLike />
                        </div>
                        <ProgramList />
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