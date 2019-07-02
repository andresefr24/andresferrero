import styled from "styled-components";

const SectionTitle = styled.h1`
    width:100%;
    text-align:center;
    color:${props => props.color || props.theme.colors.primary_dark};
    font-size:45px;
    
    @media (max-width: 575px) { 
        font-size:30px;
        width:80%;
        margin-left:10%;
        margin-top:25px;
        margin-bottom:25px;
    }
    
    @media (min-width: 576px) { 
        font-size:30px;
        width:80%;
        margin-left:10%;
        margin-top:25px;
        margin-bottom:25px;
    }
    
    @media (min-width: 768px) { 
        font-size:35px;
        margin-top:25px;
        margin-bottom:25px;
    }
    
    @media (min-width: 992px) { 
        font-size:45px;
        margin-top:25px;
        margin-bottom:25px;
    }
    
    @media (min-width: 1200px) { 
        font-size:45px;
        margin-top:25px;
        margin-bottom:25px;     
    }
`;

export default SectionTitle;