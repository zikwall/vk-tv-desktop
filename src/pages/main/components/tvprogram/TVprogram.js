import React from 'react';
import { Switch, Case } from "../../../../containers/switch";
import { Underdevelopment } from "../../../../components/underdevelopment";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Heart, HorizontalMore } from "../../../../components/icons";
import { Group, List, Cell } from "@vkontakte/vkui";
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import { useSnackbar } from 'notistack';

const TVprogram = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleMoreClick = (e) => {
        e.preventDefault();
        enqueueSnackbar('Хо-хо, вы нажали на точечки? Походу да!', {
            variant: 'success',
        });
    };

    const renderItems = () => {
        return [...Array(15)].map((v, i) => {
            return (
                <Cell key={i}
                    description="14:13"
                    asideContent={
                        <a href="#" style={{marginRight: '40px'}} onClick={handleMoreClick}>
                            <Icon24MoreHorizontal />
                        </a>
                    }>

                    Вечерние новости (с субтитрами)
                </Cell>
            );
        });
    };

    return (
        <>
            <Switch>
                <Case sheetIndex="tvprogram" sheetName="TV program">
                    <OverlayScrollbarsComponent>
                        <div style={{maxHeight: '300px'}}>
                            <Group style={{maxHeight: '300px'}}>
                                <List>
                                    { renderItems() }
                                </List>
                            </Group>
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

export default TVprogram;