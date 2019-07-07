import React from "react";
import styled from "styled-components";
import {Row,Col} from "reactstrap";

const StyledContainer = styled(Row)`    
    min-height:100vh;
    justify-content:center;    
    
    @media (max-width: 575px) { 
        padding-top:${props => props.theme.measures.header_height.xs};
        padding-bottom:${props => props.theme.measures.header_height.xs};
    }
    
    @media (min-width: 576px) { 
        padding-top:${props => props.theme.measures.header_height.sm};
        padding-bottom:${props => props.theme.measures.header_height.sm};
    }
    
    @media (min-width: 768px) { 
        padding-top:${props => props.theme.measures.header_height.md};
        padding-bottom:${props => props.theme.measures.header_height.md};
    }
    
    @media (min-width: 992px) { 
        padding-top:${props => props.theme.measures.header_height.lg};
        padding-bottom:${props => props.theme.measures.header_height.lg};
    }
    
    @media (min-width: 1200px) { 
        padding-top:${props => props.theme.measures.header_height.xl};
        padding-bottom:${props => props.theme.measures.header_height.xl};
    }
`;

class SectionContainer extends React.Component{
    render(){
        return(
            <StyledContainer>
                <Col xs={12} sm={12} md={12} lg={11} xl={11}>
                    {this.props.children}
                </Col>
            </StyledContainer>
        )
    }
}

export default SectionContainer;