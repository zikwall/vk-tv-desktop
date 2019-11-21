import React from "react";
import {NavLink} from "react-router-dom";

const HomeAsideContent = () => {
    return (
        <>
            <div className="col-md-12">
                <div className="footer-about">
                    <div className="widget">
                        <h5 className="widget-title">Navigation</h5>
                        <ul className="list-inline vertical-list">
                            <li><NavLink to="/home">Go to Home</NavLink></li>
                            <li><NavLink to="/help">Help &amp; Support</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/privacy">Terms &amp; Privacy</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeAsideContent;