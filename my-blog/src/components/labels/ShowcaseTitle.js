import styled from "styled-components";

const ShowcaseTitle = styled.p`
    font-size:18px;
    font-weight:bold;
    color:${props => props.color || props.theme.colors.primary_light};
`;

export default ShowcaseTitle;