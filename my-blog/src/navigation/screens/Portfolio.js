import React from 'react';
import connect from "react-redux/es/connect/connect";
import styled,{withTheme} from "styled-components";
import SectionContainer from "../../containers/SectionContainer";
import {Col,Row} from 'reactstrap';
import SectionTitle from "../../components/labels/SectionTitle";
import * as NavigationActionCreators from "../../reducers/NavigationReducer/actionCreators";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const PortfolioCardLayout = styled.div`
    width:100%;
    height:100%;    
    background-size:cover;
    background-position:center;
    background-image:url(${props=>process.env.PUBLIC_URL+'/assets/img/portfolio/'+props.mediaFolder+'/'+props.backgroundImage});
    background-color:${props=>props.theme.colors.primary_dark};        
    cursor:pointer;  
    
    &:hover{
        
    }     
`;

const DarkLayer = styled.div`
    width:100%;
    height:100%;
    background-image:linear-gradient(0deg, rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0.7));
    color:${props=>props.theme.colors.light};
    
    &:hover{
        .hidden-tag{
            bottom:0vw;
        }
    }
`;

const PortfolioShowcaseTitle = styled.p`   
    font-size:25px;
    position:absolute;
    left:2vw;
    top:1.25vw;        
`;

const DetailsTag = styled.p`    
    font-size:15px;
    position:absolute;
    right:2vw;
    bottom:-5vw;    
    transition:bottom 0.3s;   
`;

const CenteringRow = styled(Row)`
    margin:0;
    
    @media (max-width: 575px) {         
        justify-content:center;
    }
    
    @media (max-width: 767px) { 
        justify-content:center;
    }
`;

class Portfolio extends React.Component{
    render(){
        console.log(this.props.content.portfolio);
        return(
            <SectionContainer>
                <Row>
                    <SectionTitle>My past projects</SectionTitle>
                </Row>
                <CenteringRow>
                {
                    this.props.content.portfolio.map((project,index)=>{
                        //console.log(process.env.PUBLIC_URL+'/assets/img/portfolio/'+project.media_folder+'/'+project.images[0]);
                        return(
                            <PortfolioCard
                                key={index}
                                xs={11} sm={11} md={6} lg={4} xl={4}
                                onClick={()=>this.props.toggle_modal(true,{
                                    title:project['project-name'],
                                    contents:
                                    <div>
                                        <p>{project.date}</p>
                                        <p>{project.client}</p>
                                        <p>{project.description}</p>
                                        <p>Additional images:</p>
                                        <Carousel
                                            showArrows={true}
                                            showThumbs={false}
                                        >
                                            {
                                                project.images.map((image,index2)=>{
                                                    return(
                                                        <div>
                                                            <img src={process.env.PUBLIC_URL+'/assets/img/portfolio/'+project.media_folder+'/'+project.images[index2]} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </div>,
                                    callback:undefined
                                })}
                            >
                                <PortfolioCardLayout
                                    mediaFolder={project.media_folder}
                                    backgroundImage={project.images[0]}
                                >
                                    <DarkLayer>
                                        <PortfolioShowcaseTitle>{project["project-name"]}</PortfolioShowcaseTitle>
                                        <DetailsTag className={'hidden-tag'}>Click for details</DetailsTag>
                                    </DarkLayer>
                                </PortfolioCardLayout>
                            </PortfolioCard>
                        )
                    })
                }
                </CenteringRow>
            </SectionContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.ContentReducer.content,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggle_modal: (val,content) => {
            dispatch(NavigationActionCreators.toggle_modal(val,content))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Portfolio));