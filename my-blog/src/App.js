import React from 'react';
import * as ContentActionCreators from './reducers/ContentReducer/actionCreators';
import {connect} from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainContainer from "./containers/MainContainer";
import {ThemeProvider} from 'styled-components';

class App extends React.Component {
    componentWillMount = () => {
        this.props.fetch_content();
    };

    render() {
        if (this.props.content !== undefined) {
            return (
                <ThemeProvider theme={this.props.theme}>
                    <MainContainer/>
                </ThemeProvider>
            );
        }
        else {
            return <div>Loader goes here</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.ContentReducer.content,
        theme: state.ThemeReducer.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch_content: () => {
            dispatch(ContentActionCreators.fetch_content())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
