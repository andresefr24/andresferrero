import styled from "styled-components";
import {Col} from "reactstrap";

const AboutBox = styled(Col)`
    background-color:${props=>props.background || props.theme.colors.primary_dark};
    
    @media (max-width: 575px) {         
        padding-top:${props=>props.separated?'5vw':0};
        margin-bottom:${props=>props.independent?'5vw':0};
    }
    
    @media (max-width: 767px) { 
        margin-bottom:5vw;
        padding-top:${props=>props.separated?'5vw':0};
        margin-bottom:${props=>props.independent?'5vw':0};
    }
    
    @media (max-width: 991px) { 
        margin-bottom:1vw;
        padding-top:${props=>props.separated?'1vw':0};
        margin-bottom:${props=>props.independent?'1vw':0};
    }
    
    @media (max-width: 1199px) {         
        padding-top:${props=>props.separated?'1vw':0};        
    }
    
    @media (min-width: 1200px) {         
        padding-top:${props=>props.separated?'1vw':0};        
    }    
`;

export default AboutBox;