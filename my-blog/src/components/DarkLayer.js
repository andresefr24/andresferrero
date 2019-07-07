import styled from "styled-components";

const DarkLayer = styled.div`
    width:100%;
    height:100%;
    background-image:linear-gradient(0deg, rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0.7));
    color:${props=>props.theme.colors.light};
    
    &:hover{
        opacity:1;
    }
`;

export default DarkLayer;