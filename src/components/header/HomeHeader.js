import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';
import { Offcanvas } from "../../containers/offcanvas";

const HomeHeader = (props) => {
    const rubberBandAnimation = keyframes`${rubberBand}`;
    const RubberBandDiv = styled.div`
        animation: 1s ${rubberBandAnimation};
    `;

    return (
        <header id="site-header" className="site-header mb-1">
            <div className="master-container-fluid header-inner">
                <div className="row">
                    <div className="col-2 col-md-4 d-flex align-items-center">
                        <Offcanvas />
                    </div>
                    <div className="col-auto col-md-4 align-items-center justify-content-center d-none d-md-flex">
                        <RubberBandDiv>
                            <div className="brand">
                                <a className="brand d-flex align-items-center" href="/">
                                    <strong className="p-1 fs-6 fs-lg-8">Welcome to Home</strong>
                                </a>
                            </div>
                        </RubberBandDiv>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;