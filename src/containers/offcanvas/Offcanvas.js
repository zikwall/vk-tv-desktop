import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import cn from 'classnames';
import { Menu } from "../../components/icons";

const Offcanvas = () => {

    const [hovered, setHovered] = useState(false);

    const handleClickOffcanvas = (e) => {
        e.preventDefault();

        setHovered(!hovered);
    };

    return (
        <div className={cn({'off-canvas-overlay-on': hovered})}>
            <div id="primary-menu-offcanvas" className={cn({
                'off-canvas off-canvas-left d-flex flex-column': true,
                'show': hovered
            })}>
                <div className="m-3">
                    <a className="close-offcanvas-main-menu" href="#">
                        <span className="adonis-icon icon-5x">
                            <Menu onClick={ handleClickOffcanvas }/>
                        </span>
                    </a>
                </div>

                <div className="side-nav-container d-flex flex-column align-items-center ml-auto mr-auto position-relative">
                    <ul className={cn({
                        'side-nav adonis-effect active-level-2': true,
                        'opacity1': hovered
                    })}>
                        <li className={cn({
                                'nav-item': true,
                                'opacity1 translate550': hovered
                            })}>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className={cn({
                            'nav-item': true,
                            'opacity1 translate550': hovered
                        })}>
                            <NavLink className="nav-link" to="/online">Online</NavLink>
                        </li>
                        <li className={cn({
                            'nav-item': true,
                            'opacity1 translate550': hovered
                        })}>
                            <NavLink className="nav-link" to="/home/help">Help &amp; Support</NavLink>
                        </li>
                        <li className={cn({
                            'nav-item': true,
                            'opacity1 translate550': hovered
                        })}>
                            <NavLink className="nav-link" to="/home/contact">Contact</NavLink>
                        </li>
                        <li className={cn({
                            'nav-item': true,
                            'opacity1 translate550': hovered
                        })}>
                            <NavLink className="nav-link" to="/home/privacy">Terms &amp; Privacy</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="d-block d-lg-none">
                <a onClick={ handleClickOffcanvas } href="#" className="navbar-toggler toggle-off-canvas-main-menu mr-2">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </a>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink className="nav-link" to="/online">Online</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink className="nav-link" to="/home/help">Help &amp; Support</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink className="nav-link" to="/home/privacy">Terms &amp; Privacy</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Offcanvas;