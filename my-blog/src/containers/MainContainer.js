import React from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import MainRouter from "../navigation/MainRouter";
import img from '../assets/img/pattern.png';
import Modal from "../navigation/Modal/Modal";

const StyledContainer = styled(Container)`    
    min-height:100vh;    
    overflow-x:hidden;
    padding:0;
    background-color:${props=>props.theme.colors.primary}; 
    background-image:url(${img});
`;

class MainContainer extends React.Component {
    render() {
        return (
            <StyledContainer fluid>
                <MainRouter/>
                <Modal/>
            </StyledContainer>
        )
    }
}

export default MainContainer;