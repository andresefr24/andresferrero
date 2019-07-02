import React from 'react';
import styled from 'styled-components';
import HeaderOptions from "./HeaderOptions";
import {Row,Col} from 'reactstrap';

const StyledHeader = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100vw;    
    background-color:${props=>props.theme.colors.primary};
    background-image:url(${process.env.PUBLIC_URL+'/assets/img/pattern.png'});
    z-index:100;    
    
    @media (max-width: 575px) {
        height:${props=>props.theme.measures.header_height.xs};
    }
    
    @media (min-width: 576px) { 
        height:${props=>props.theme.measures.header_height.sm};
    }
    
    @media (min-width: 768px) { 
        height:${props=>props.theme.measures.header_height.md};
    }
    
    @media (min-width: 992px) { 
        height:${props=>props.theme.measures.header_height.lg};
    }
    
    @media (min-width: 1200px) { 
        height:${props=>props.theme.measures.header_height.xl};        
    }
`;

class Header extends React.Component{
    render(){
        return(
            <StyledHeader>
                <Row>
                    <Col>
                        <HeaderOptions/>
                    </Col>
                </Row>
            </StyledHeader>
        )
    }
}

export default Header;