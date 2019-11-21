import React from "react";
import './index.css';

export const BlockBody = ({ children }) => {
    return (
       <div className="ui_block_body">
            { children }
        </div>
    );
};

export const BlockHeader = ({ children }) => {
    return (
        <div className="ui_block_header clear_fix">
            <div className="ui_page_block_header_inner">
                { children }
            </div>
        </div>
    );
};

export const BlockH2 = ({ children }) => {
    return (
        <div className="ui_block_h2">
            { children }
        </div>
    );
};

const Block = ({children }) => {
    return (
        <div className="ui_block">
            { children }
        </div>
    );
};

export default Block;
