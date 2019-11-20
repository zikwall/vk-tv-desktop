import React from "react";

const GoMobile = () => {
    return (
        <>
            <div className="col-md-6 col-xl-2">
                <div className="footer-about">
                    <div className="widget">
                        <h5 className="widget-title">Navigation</h5>
                        <ul className="list-inline vertical-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Help &amp; Support</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms &amp; Privacy</a></li>
                            <li><a href="#">Store</a></li>
                            <li><a href="#">News &amp; Blog</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-2">
                <div className="footer-manage widget">
                    <h5 className="widget-title">Manage</h5>
                    <ul className="list-inline vertical-list">
                        <li><a href="#">Account</a></li>
                        <li><a href="#">My wisht list</a></li>
                        <li><a href="#">My playlist</a></li>
                        <li><a href="#">Artist Followinge</a></li>
                        <li><a href="#">Purchased</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default GoMobile;