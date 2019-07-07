import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position:fixed;
    z-index:10000;
    background-color:black;
    height:100vh;
    width:100vw;
    top:0;
    left:0;
`;

class ExperimentContainer extends React.Component{
    render(){
        return(
            <StyledContainer {...this.props}>
                {this.props.children}
            </StyledContainer>
        )
    }
}

export default ExperimentContainer;