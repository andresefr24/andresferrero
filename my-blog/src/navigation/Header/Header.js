import React from 'react';
import styled from 'styled-components';
import HeaderOptions from "./HeaderOptions";

const StyledHeader = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100vw;    
    background-color:black;
    z-index:100;
    
    @media (max-width: 575px) { 
        height:${props=>props.theme.measures.header_height};
    }
    
    @media (min-width: 576px) { 
        height:${props=>props.theme.measures.header_height};
    }
    
    @media (min-width: 768px) { 
        height:${props=>props.theme.measures.header_height};
    }
    
    @media (min-width: 992px) { 
        height:${props=>props.theme.measures.header_height};
    }
    
    @media (min-width: 1200px) { 
        height:${props=>props.theme.measures.header_height};
    }
`;

class Header extends React.Component{
    render(){
        return(
            <StyledHeader>
                <HeaderOptions/>
            </StyledHeader>
        )
    }
}

export default Header;