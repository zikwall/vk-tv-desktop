import React from 'react';
import {getChannelsPending, getSelectChannel} from "../../../../redux/reducers";
import { connect } from "react-redux";
import DescriptionPlaceholder from "./Placeholder";

const Description = (props) => {
    let { channel, pending } = props;

    let content = '';

    if (pending === true) {
        content = <DescriptionPlaceholder />;
    } else {
        content = (
            <>
                <h6 className="inactive-color">Информация о передаче</h6>
                <h3 className="album-title">Первый канал</h3>
                <div className="separator mb-4 mt-4">
                    <span className="separator-md"></span>
                </div>
                <div className="about">
                    <h4>Вечерний Галустян</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                        Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a
                        ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac
                        nisi Lorem ipsum dolor sit amet
                        Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam
                        ac elit a ante commodo tristique.
                    </p>
                    <p>
                        Url: { channel.url }
                    </p>
                </div>
            </>
        )
    }

    return (
        <div className="album-top-box text-center text-md-left">
            { content }
        </div>
    );
};

const mapStateToProps = state => ({
    pending: getChannelsPending(state),
    channel: getSelectChannel(state),
});

export default connect(mapStateToProps)(Description);