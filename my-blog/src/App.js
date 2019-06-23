import React from 'react';
import * as ContentActionCreators from './reducers/ContentReducer/actionCreators';
import {connect} from "react-redux";

class App extends React.Component {
    componentWillMount = () => {
        this.props.fetch_content();
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch_content: () => {
            dispatch(ContentActionCreators.fetch_content())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
