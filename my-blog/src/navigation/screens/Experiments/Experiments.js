import React from 'react';
import {Row} from "reactstrap";
import SectionTitle from "../../../components/labels/SectionTitle";
import SectionContainer from "../../../containers/SectionContainer";
import ShowcaseText from "../../../components/labels/ShowcaseText";
import * as NavigationActionCreators from "../../../reducers/NavigationReducer/actionCreators";
import connect from "react-redux/es/connect/connect";
import {withTheme} from "styled-components";
import PortfolioCard from "../../../containers/cards/portfolio/PortfolioCard";
import PortfolioShowcaseTitle from "../../../containers/cards/portfolio/PortfolioShowcaseTitle";
import PortfolioCardLayout from "../../../containers/cards/portfolio/PortfolioCardLayout";
import DarkLayer from "../../../components/DarkLayer";
import DetailsTag from "../../../containers/cards/portfolio/DetailsTag";
import {Link,Route} from'react-router-dom';

class Experiments extends React.Component {
    render() {
        console.log(this.props.match.path);
        return (
            <SectionContainer>
                <Row>
                    <SectionTitle>My experiments</SectionTitle>
                </Row>
                <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ShowcaseText
                        align={'center'}
                    >
                        In this section i post several of my visual experiments which i do whenever i get some
                        inspiration.
                    </ShowcaseText>
                </Row>
                <Row>
                    {
                        [1, 2, 3].map((experiment, index) => {
                            return (
                                    <PortfolioCard
                                        key={index}
                                        xs={11} sm={11} md={6} lg={4} xl={4}
                                        onClick={()=>this.props.navigate_to("/andresferrero/experiments/experiment"+(index+1))}
                                    >
                                        <Link to={'/andresferrero/experiments/experiment'+(index+1)}>
                                        <PortfolioCardLayout
                                            mediaFolder={'experiments'}
                                            backgroundImage={'experiment' + (index + 1)}
                                        >
                                            <DarkLayer>
                                                <PortfolioShowcaseTitle>Asd</PortfolioShowcaseTitle>
                                                <DetailsTag className={'hidden-tag'}>Click for details</DetailsTag>
                                            </DarkLayer>
                                        </PortfolioCardLayout>
                                        </Link>
                                    </PortfolioCard>

                            )
                        })
                    }
                </Row>
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
        toggle_modal: (val, content) => {
            dispatch(NavigationActionCreators.toggle_modal(val, content))
        },
        navigate_to: (val) => {
            dispatch(NavigationActionCreators.navigate_to(val))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Experiments));