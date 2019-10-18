import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <div className="footer container-lg width-full px-3" role="contentinfo">
            <div
                className="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray">
                <ul className="list-style-none d-flex flex-wrap ">
                    <li className="mr-3">© { (new Date).getFullYear() }
                        <span> VK TV</span>, Inc.
                    </li>
                    <li className="mr-3">
                        <a href="">Terms</a>
                    </li>
                    <li className="mr-3">
                        <a href="">Privacy</a>
                    </li>
                    <li className="mr-3">
                        <a href="">Security</a>
                    </li>
                    <li className="mr-3">
                        <a href="https://status.vktv.com/">Status</a>
                    </li>
                    <li>
                        <a href="https://help.vktv.com">Help</a>
                    </li>
                </ul>

                <ul className="list-style-none d-flex flex-wrap ">
                    <li className="mr-3">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="mr-3">
                        <a href="/pricing">Pricing</a>
                    </li>
                    <li className="mr-3">
                        <a href="/developer">API</a>
                    </li>
                    <li className="mr-3">
                        <a href="/train">Training</a>
                    </li>
                    <li className="mr-3">
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>

                </ul>
            </div>
            <div className="d-flex flex-justify-center pb-6">
                <span className="f6 text-gray-light"></span>
            </div>
        </div>
    );
};

export default Footer;