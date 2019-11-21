import React from "react";
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import './index.css';
import { Block, BlockBody, BlockH2, Tabs, Tab } from "../ui";

const Program = ({ onHover }) => {
    return (
        <li className="tele_program">
            <a className="link link_hovered link_pressed tele_program_item_link" href="/">
                <div>
                    <b className="tele_program_item_time">11:25</b>
                    <div className="tele_program_item_title">
                        <div className="tele_program_item_title_wrap">Местное время.</div>
                        <div className="ui_actions_menu_icons" tabIndex="0" aria-label="Действия" role="button">
                            <Icon24MoreHorizontal />
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
};

const ProgramList = () => {
    return (
        <Block style={{marginTop: '15px'}}>
            <BlockH2>
                <Tabs>
                    <Tab>Понедельник</Tab>
                    <Tab selected={true}>Вторник</Tab>
                    <Tab>Среда</Tab>
                    <Tab>Четверг</Tab>
                    <Tab>...</Tab>
                </Tabs>
            </BlockH2>
            <BlockBody>
                <div className="tele_programs">
                    <ul className="tele_program_list">
                        <Program />
                        <Program />
                        <Program />
                        <Program />
                        <Program />
                    </ul>
                </div>
            </BlockBody>
        </Block>
    );
};

export default ProgramList;