import React from 'react';
import connect from "react-redux/es/connect/connect";
import styled,{withTheme} from "styled-components";
import SectionContainer from "../../containers/SectionContainer";
import {Col,Row} from 'reactstrap';
import SectionTitle from "../../components/labels/SectionTitle";
import * as NavigationActionCreators from "../../reducers/NavigationReducer/actionCreators";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PortfolioCard from "../../containers/cards/portfolio/PortfolioCard";
import PortfolioCardLayout from "../../containers/cards/portfolio/PortfolioCardLayout";
import PortfolioShowcaseTitle from "../../containers/cards/portfolio/PortfolioShowcaseTitle";
import DarkLayer from "../../components/DarkLayer";
import DetailsTag from "../../containers/cards/portfolio/DetailsTag";

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
        //console.log(this.props.content.portfolio);
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
                                        <p>Made for: {project.client}</p>
                                        <p>{project.description}</p>
                                        <p>Gallery:</p>
                                        <Carousel
                                            showArrows={true}
                                            showThumbs={false}
                                            dynamicHeight
                                        >
                                            {
                                                project.images.map((image,index2)=>{
                                                    return(
                                                        <div key={index2}>
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
                                    mediaFolder={'portfolio/'+project.media_folder}
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