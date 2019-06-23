import React from 'react';
import {Link} from "react-router-dom";
import routes from '../routes';
import capitalizeString from "../../helpers/capitalizeString";
import styled from 'styled-components';
import {Row} from 'reactstrap';
import * as NavigationActionCreators from "../../reducers/NavigationReducer/actionCreators";
import connect from "react-redux/es/connect/connect";

const StyledLinkText = styled.p`
    text-align:center;
    width:100%;
    color:white;
    text-decoration:none;    
    
    @media (max-width: 575px) { 
        line-height:${props=>props.theme.measures.header_height.xs};
    }
    
    @media (min-width: 576px) { 
        line-height:${props=>props.theme.measures.header_height.sm};
    }
    
    @media (min-width: 768px) { 
        line-height:${props=>props.theme.measures.header_height.md};
    }
    
    @media (min-width: 992px) { 
        line-height:${props=>props.theme.measures.header_height.lg};
    }
    
    @media (min-width: 1200px) { 
        line-height:${props=>props.theme.measures.header_height.xl};
    }
`;

const StyledLink = styled(Link)`
    text-decoration:none;    
    width:100%;
    font-family:Arial; 
    color:${props=>props.active?props.theme.colors.primary_light:props.theme.colors.primary_dark};   
    font-size:14px;
    transition:color 0.3s;
    
    &:hover{
        text-decoration:none;
        color:${props=>props.theme.colors.primary_light};
    }
`;

class HeaderOptions extends React.Component{
    render(){
        return(
            <Row
                style={{height:'100%',margin:0,justifyContent:'flex-end'}}
            >
                {
                    Object.keys(routes).map((route,index)=>{
                        return(
                            <div
                                key={index}
                                style={{justifyContent:'center',alignItems:'center',paddingRight:'3vw'}}
                            >
                                <StyledLinkText>
                                    <StyledLink
                                        to={'/'+(route==='home'?'':route+'/')}
                                        onClick={()=>this.props.navigate_to(route)}
                                        active={this.props.current_route===route}
                                    >
                                        {
                                            capitalizeString(route)
                                        }
                                        </StyledLink>
                                </StyledLinkText>
                            </div>
                        )
                    })
                }
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current_route: state.NavigationReducer.current_route,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        navigate_to: (val) => {
            dispatch(NavigationActionCreators.navigate_to(val))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderOptions);