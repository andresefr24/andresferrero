import React from 'react';
import styled, {withTheme} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import * as NavigationActionCreators from "../../reducers/NavigationReducer/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import {Col, Container, Row} from 'reactstrap';
import routes from "../routes";
import capitalizeString from "../../helpers/capitalizeString";

const StyledDrawerContainer = styled.div`
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    width:100vw;
    z-index:100;

    @media (max-width: 575px) {        
        display:block;
    }
    
    @media (min-width: 576px) { 
        height:${props => props.theme.measures.header_height.sm};
        display:block;
    }
    
    @media (min-width: 768px) {         
        display:none;
    }   
`;

const DrawerButton = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    left:0;
    top:0;
    background-color:${props => props.theme.colors.primary_dark};   
    z-index:1000;
    
    @media (max-width: 575px) {        
        width:8.33vw;
        height:8.33vw;
    }
    
    @media (min-width: 576px) { 
        width:3vw;
        height:3vw;
    }
`;

const DrawerSlide = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    background-color:${props => props.theme.colors.primary_dark};
    right:${props => props.open ? '0' : '100'}vw;
    top:0;
    transition:right 0.3s;   
    z-index:999;
    
    @media (max-width: 575px) {                
        padding-top:12.33vw;
    }
    
    @media (min-width: 576px) { 
        padding-top:6vw;                
    }
`;

const StyledLink = styled(Link)`
    text-decoration:none;    
    width:100%;
    font-family:Arial; 
    color:${props=>props.theme.colors.primary_light};   
    font-size:20px;
    line-height:60px;
    transition:color 0.3s;                    
`;

class Drawer extends React.Component {
    render() {
        return (
            <StyledDrawerContainer>
                <DrawerButton
                    onClick={this.props.toggle_drawer}
                >
                    {
                        this.props.drawer_is_open ?
                            <FontAwesomeIcon
                                icon={faTimes}
                                size={"lg"}
                                color={this.props.theme.colors.primary_light}
                            />
                            :
                            <FontAwesomeIcon
                                icon={faBars}
                                size={"lg"}
                                color={this.props.theme.colors.light}
                            />
                    }
                </DrawerButton>
                <DrawerSlide
                    open={this.props.drawer_is_open}
                >
                    <Container fluid>
                        {
                            Object.keys(routes).map((route, index) => {
                                if(route!==this.props.current_route){
                                    return (
                                        <Row>
                                            <Col xs={1} sm={1}/>
                                            <Col xs={10} sm={10} style={{borderBottom:Object.keys(routes).length-1>index?'solid 1px '+this.props.theme.colors.secondary:''}}>
                                                <StyledLink
                                                    to={'/andresferrero/'+(route==='home'?'':route+'/')}
                                                    onClick={()=>{
                                                        this.props.navigate_to(route);
                                                        this.props.toggle_drawer()
                                                    }}
                                                >
                                                    {
                                                        capitalizeString(route)
                                                    }
                                                </StyledLink>
                                            </Col>
                                            <Col xs={1} sm={1}/>
                                        </Row>
                                    )
                                }
                                else return null
                            })
                        }
                    </Container>
                </DrawerSlide>
            </StyledDrawerContainer>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        current_route: state.NavigationReducer.current_route,
        drawer_is_open: state.NavigationReducer.drawer_is_open
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggle_drawer: () => {
            dispatch(NavigationActionCreators.toggle_drawer())
        },
        navigate_to: (val) => {
            dispatch(NavigationActionCreators.navigate_to(val))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Drawer));