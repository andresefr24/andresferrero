import styled from "styled-components";

const PortfolioCardLayout = styled.div`
    width:100%;
    height:100%;    
    background-size:cover;
    background-position:center;
    background-image:url(${props=>process.env.PUBLIC_URL+'/assets/img/'+props.mediaFolder+'/'+props.backgroundImage});
    background-color:${props=>props.theme.colors.primary_dark};        
    cursor:pointer;     
`;

export default PortfolioCardLayout;