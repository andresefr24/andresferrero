import styled from "styled-components";

const AboutSubtitle = styled.p`
    font-size:25px;
    font-weight:bold;
    color:${props => props.color || props.theme.colors.primary_dark};    
    margin-top:1vw;    
`;

export default AboutSubtitle;