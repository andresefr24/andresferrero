import styled from "styled-components";
import {Col} from "reactstrap";

const InnerShowcaseCard = styled(Col)`       
    @media (max-width: 575px) {         
        margin-bottom:5vw;
    }
    
    @media (min-width: 576px) { 
        margin-bottom:5vw;
    }
    
    @media (min-width: 768px) { 
        margin-bottom:1vw;
    }
    
    @media (min-width: 992px) { 
        margin-bottom:1vw;
    }
    
    @media (min-width: 1200px) { 
        margin-bottom:1vw;  
    }       
`;

export default InnerShowcaseCard;