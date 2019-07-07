import styled from "styled-components";
import {Col} from "reactstrap";

const PortfolioCard = styled(Col)`    
    padding-left:0.5vw;
    padding-right:0.5vw;    
    margin-bottom:1vw;    
    overflow:hidden;
    
    @media (max-width: 575px) {         
        min-height:52vw;
        margin-bottom:5vw;        
    }
    
    @media (max-width: 767px) { 
        height:52vw;
        margin-bottom:5vw;
    }
    
    @media (max-width: 991px) { 
        min-height:32vw;        
    }
    
    @media (max-width: 1199px) {         
        min-height:19vw;
    }
    
    @media (min-width: 1200px) {         
        min-height:19vw;
    }    
`;

export default PortfolioCard;