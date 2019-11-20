import React from 'react';
import { Group, Gallery } from "@vkontakte/vkui";

class Home extends React.Component {


    render() {
        return (
            <>
                <Group title="Sticks right">
                    <Gallery
                        slideWidth="90%"
                        style={{ height: 150 }}
                        bullets="dark"
                    >
                        <div style={{ backgroundColor: 'var(--destructive)' }} />
                        <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                        <div style={{ backgroundColor: 'var(--accent)' }} />
                    </Gallery>
                </Group>
            </>
        );
    }
}

export default Home;