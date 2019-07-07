import React from 'react';
import experimentsRoutes from '../experimentsRoutes';
import {Route} from 'react-router-dom';

class ExperimentsRouter extends React.Component{
    render(){
        //console.log(this.props.match.path);
        return(
            <div>
                {
                    Object.keys(experimentsRoutes).map((route,index)=>{
                        return(
                            <Route
                                key={index}
                                path={(index===0?this.props.match.path+'/':this.props.match.path+'experiment'+(index))}
                                component={experimentsRoutes[route]}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default ExperimentsRouter;