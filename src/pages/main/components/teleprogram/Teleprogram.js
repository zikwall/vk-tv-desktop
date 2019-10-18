import React from 'react';
import { Switch, Case } from "../../../../containers/switch";
import { Underdevelopment } from "../../../../components/underdevelopment";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

class Teleprogram extends React.Component {
    state = {
        activeTab2: 'all',
    };

    renderItems = () => {
        return [...Array(15)].map(() => {
            return (
                <li className="item">
                    <div className="item-number">
                        <span className="hover-hide">01</span>
                    </div>

                    <div className="item-title">Вечерние новости (с субтитрами)</div>
                    <div className="item-genre">
                        <span className="hover-hide hover-lg-show">Classical</span>
                    </div>

                    <div className="item-duration">
                        <span className="hover-hide">14:13</span>
                    </div>

                    <div className="item-tools">
                        <span className="hover-hide">1245</span>
                        <div className="hover-show d-flex flex-nowrap hover-tools">
                            <span className="adonis-icon icon-1x">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <use xlinkHref="#icon-heart-blank"></use>
                                </svg>
                            </span>
                            <span className="ml-3 adonis-icon icon-3x">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <use xlinkHref="#icon-plus"></use>
                                </svg>
                            </span>
                            <span className="ml-3 adonis-icon pointer dropdown-menu-toggle">
                                <span className="adonis-icon icon-4x">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <use xlinkHref="#icon-horizontal-dots"></use>
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </div>
                </li>
            );
        });
    };

    render() {
        return (
            <>
                <Switch>
                    <Case sheetIndex="teleprogram" sheetName="Teleprograms">
                        <OverlayScrollbarsComponent>
                            <div style={{maxHeight: '350px'}}>
                                <ul className="adonis-album-list pb-5 pt-e-30">
                                    { this.renderItems() }
                                </ul>
                            </div>
                        </OverlayScrollbarsComponent>
                    </Case>
                    <Case sheetIndex="other" sheetName="Other">
                        <Underdevelopment />
                    </Case>
                </Switch>
            </>
        );
    }
}

export default Teleprogram;