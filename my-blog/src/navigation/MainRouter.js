import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from './routes';
import Header from "./Header/Header";
import Drawer from "./Drawer/Drawer";

class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <Drawer/>
                {
                    Object.keys(routes).map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={'/andresferrero/' + (route === 'home' ? '' : route + '/')}
                                exact={route === 'home'}
                                component={routes[route]}
                            />
                        )
                    })
                }
            </Router>
        )
    }
}

export default MainRouter;