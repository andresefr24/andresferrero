import React from 'react';
import {Col, Row} from 'reactstrap';
import styled, {withTheme} from "styled-components";

const StyledHomeSection = styled(Col)`    
    position:absolute;                   
    min-height:100%;   
    justify-content:space-around;
    align-items:center;    
    display:flex;
    flex-direction:column;      
      
    @media (max-width: 575px) { 
        padding-top:${props => props.theme.measures.header_height.xs};
    }
    
    @media (min-width: 576px) { 
        padding-top:${props => props.theme.measures.header_height.sm};
    }
    
    @media (min-width: 768px) { 
        padding-top:${props => props.theme.measures.header_height.md};
    }
    
    @media (min-width: 992px) { 
        padding-top:${props => props.theme.measures.header_height.lg};
    }
    
    @media (min-width: 1200px) { 
        padding-top:${props => props.theme.measures.header_height.xl};
    }
    
    .row{
        flex-direction:column;
        justify-content:center; 
        
        h1{
            text-align:center;   
            font-size:50px;         
            color:${props=>props.theme.colors.primary_dark};
        }    
        
        p{
            text-align:center;
            margin-top:1em;
            color:${props=>props.theme.colors.primary_dark};
        }           
    }
`;

class Home extends React.Component {
    render() {
        return (
            <StyledHomeSection>
                <Row/>
                <Row/>
                <Row>
                    <h1>{'<Hello World!/>'}</h1>
                    <h1>Welcome to my site</h1>
                    <p>In this space i post about myself. My passions, my experience and other things involving my career as a Front-end developer.</p>
                    <p>Feel free to contact me for business inquiries or anything that may be troubling you.</p>
                    <p>to download my CV <span style={{color:this.props.theme.colors.primary_light}}>Click here!</span></p>
                </Row>
                <Row/>
                <Row/>
            </StyledHomeSection>
        )
    }
}

export default withTheme(Home);