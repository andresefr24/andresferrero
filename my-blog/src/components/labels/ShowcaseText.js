import styled from "styled-components";

const ShowcaseText = styled.p`
    font-size:14px;    
    color:${props => props.color || props.theme.colors.primary_dark};
    text-align:${props=>props.align || 'left'};
`;

export default ShowcaseText;