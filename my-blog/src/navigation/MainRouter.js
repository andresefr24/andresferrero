import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes';
import Header from "./Header/Header";

class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                {
                    Object.keys(routes).map((route,index)=>{
                        return(
                            <Route key={index} path={'/'+(route==='home'?'':route+'/')} exact={route==='home'} component={routes[route]}/>
                        )
                    })
                }
            </Router>
        )
    }
}

export default MainRouter;