import React from 'react';
import {Col, Row} from 'reactstrap';
import styled, {withTheme} from "styled-components";
import ShowcaseText from "../../components/labels/ShowcaseText";
import HomeGreeting from "../../components/labels/HomeGreeting";

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
    
`;

class Home extends React.Component {
    render() {
        return (
            <StyledHomeSection>
                <Row/>
                <Row/>
                <Row>
                    <HomeGreeting>{'<Hello World!/>'}<br/>Welcome to my site</HomeGreeting>
                    <div style={{width: '80%', marginLeft: '10%', marginTop: '25px'}}>
                        <ShowcaseText
                            align={'center'}
                        >
                            In this space i post about myself. My passions, my experience and other things involving my
                            career as a Front-end developer.
                        </ShowcaseText>
                        <ShowcaseText
                            align={'center'}
                        >
                            Feel free to contact me for business inquiries or anything that may be troubling you.
                        </ShowcaseText>
                        <ShowcaseText
                            align={'center'}
                        >
                            to download my CV <span
                            style={{color: this.props.theme.colors.primary_light}}>Click here!</span>
                        </ShowcaseText>
                    </div>
                </Row>
                <Row/>
                <Row/>
            </StyledHomeSection>
        )
    }
}

export default withTheme(Home);