import React from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import MainRouter from "../navigation/MainRouter";

const StyledContainer = styled(Container)`    
    min-height:100vh;
    padding:0;
`;

class MainContainer extends React.Component {
    render() {
        return (
            <StyledContainer fluid>
                <MainRouter/>
            </StyledContainer>
        )
    }
}

export default MainContainer;