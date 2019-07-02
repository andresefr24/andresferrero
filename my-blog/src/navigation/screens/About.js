import React from 'react';
import {Col, Row} from 'reactstrap';
import SectionContainer from "../../containers/SectionContainer";
import connect from "react-redux/es/connect/connect";
import {withTheme} from 'styled-components';
import SectionTitle from "../../components/labels/SectionTitle";
import AboutSubtitle from "../../components/labels/AboutSubtitle";
import ShowcaseTitle from "../../components/labels/ShowcaseTitle";
import ShowcaseText from "../../components/labels/ShowcaseText";
import AboutBox from "../../containers/cards/AboutBox";
import InnerShowcaseCard from "../../containers/cards/InnerShowcaseCard";

class About extends React.Component {
    render() {
        //console.log(this.props.content);
        return (
            <SectionContainer>
                <Row>
                    <SectionTitle>I'm Andrés, a Madrid based front-end developer.</SectionTitle>
                </Row>
                <Row style={{justifyContent:'center',margin:0}}>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={2} xl={2}
                        background={this.props.theme.colors.primary_dark}
                        independent
                    >
                        <Row>
                            <Col>
                                <AboutSubtitle color={this.props.theme.colors.secondary}>
                                    Skills
                                </AboutSubtitle>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.content.skills.map((skill, index) => {
                                    return (
                                        <Col
                                            key={index}
                                            xs={6} sm={6} md={6} lg={12} xl={12}
                                        >
                                            <ShowcaseText color={this.props.theme.colors.light}>
                                                {skill}
                                            </ShowcaseText>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </AboutBox>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={10} xl={10}
                        background={this.props.theme.colors.primary_light}
                        independent
                    >
                        <Row>
                            <Col>
                                <AboutSubtitle
                                    color={this.props.theme.colors.primary_dark}
                                >
                                    Work experience:
                                </AboutSubtitle>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.content.experience.map((showcase, index) => {
                                    return (
                                        <InnerShowcaseCard
                                            key={index}
                                            xs={12} sm={12} md={6} lg={6} xl={6}
                                        >
                                            <ShowcaseTitle
                                                color={this.props.theme.colors.primary_dark}
                                            >
                                                {showcase.title}
                                            </ShowcaseTitle>
                                            <ShowcaseText>
                                                {showcase['job-title']}
                                            </ShowcaseText>
                                            <ShowcaseText>
                                                {'From ' + showcase.timespan.start + (showcase.timespan.end ? ' through ' + showcase.timespan.end : ' until today')}
                                            </ShowcaseText>
                                            <ShowcaseText>
                                                {showcase.description}
                                            </ShowcaseText>
                                        </InnerShowcaseCard>
                                    )
                                })
                            }
                        </Row>
                    </AboutBox>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={2} xl={2}
                        background={this.props.theme.colors.secondary}
                    >
                        <AboutSubtitle>
                            Studies
                        </AboutSubtitle>
                    </AboutBox>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={10} xl={10}
                        background={this.props.theme.colors.primary_dark}
                        separated
                        independent
                    >
                        <Row>
                            {
                                this.props.content.studies.map((degree, index) => {
                                    return (
                                        <InnerShowcaseCard
                                            key={index}
                                            xs={12} sm={12} md={12} lg={6} xl={6}
                                        >
                                            <ShowcaseTitle color={this.props.theme.colors.secondary}>
                                                {degree.title}
                                            </ShowcaseTitle>
                                            <ShowcaseText color={this.props.theme.colors.light}>
                                                {degree.description}
                                            </ShowcaseText>
                                            <ShowcaseText color={this.props.theme.colors.light}>
                                                {'From ' + degree.timespan.start + (degree.timespan.end ? ' through ' + degree.timespan.end : '')}
                                            </ShowcaseText>
                                        </InnerShowcaseCard>
                                    )
                                })
                            }
                        </Row>
                    </AboutBox>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={2} xl={2}
                        background={this.props.theme.colors.primary_dark}
                    >
                        <AboutSubtitle
                            color={this.props.theme.colors.secondary}
                        >
                            Workshops
                        </AboutSubtitle>
                    </AboutBox>
                    <AboutBox
                        xs={11} sm={11} md={11} lg={10} xl={10}
                        background={this.props.theme.colors.primary_light}
                        separated
                    >
                        <Row>
                            {
                                this.props.content.workshops.map((workshop, index) => {
                                    //console.log(workshop);
                                    return (
                                        <InnerShowcaseCard
                                            key={index}
                                            xs={12} sm={12} md={6} lg={6} xl={6}
                                        >
                                            <ShowcaseTitle color={this.props.theme.colors.primary_dark}>
                                                {workshop.title}
                                            </ShowcaseTitle>
                                            <ShowcaseText color={this.props.theme.colors.primary_dark}>
                                                {workshop.date}
                                            </ShowcaseText>
                                            <ShowcaseText>
                                                {workshop.description}
                                            </ShowcaseText>
                                        </InnerShowcaseCard>
                                    )
                                })
                            }
                        </Row>
                    </AboutBox>
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

export default connect(mapStateToProps, null)(withTheme(About));