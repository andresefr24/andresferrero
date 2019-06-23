import React from 'react';
import {Link} from "react-router-dom";
import routes from '../routes';
import capitalizeString from "../../helpers/capitalizeString";
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:row;    
    align-items:center;
    justify-content:space-around;   
`;

class HeaderOptions extends React.Component{
    render(){
        return(
            <StyledList>
                {
                    Object.keys(routes).map((route,index)=>{
                        return(
                            <li key={index}>
                                <Link to={'/'+(route==='home'?'':route+'/')}>{capitalizeString(route)}</Link>
                            </li>
                        )
                    })
                }
            </StyledList>
        )
    }
}

export default HeaderOptions;