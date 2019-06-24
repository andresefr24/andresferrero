import React from 'react';
import {Col, Row} from 'reactstrap';
import SectionContainer from "../../containers/SectionContainer";
import connect from "react-redux/es/connect/connect";
import styled, {withTheme} from 'styled-components';

const SectionTitle = styled.h1`
    width:100%;
    text-align:center;
    color:${props => props.color || props.theme.colors.primary_dark};
    font-size:45px;
`;

const AboutSubtitle = styled.p`
    font-size:30px;
    font-weight:bold;
    color:${props => props.color || props.theme.colors.primary_dark};
    text-transform:allcaps;
`;

const ShowcaseTitle = styled.p`
    font-size:18px;
    font-weight:bold;
    color:${props => props.color || props.theme.colors.primary_light};
`;

const ShowcaseText = styled.p`
    font-size:14px;    
    color:${props => props.color || props.theme.colors.primary_dark};
`;

class About extends React.Component {
    render() {
        //console.log(this.props.content);
        return (
            <SectionContainer>
                <Row style={{padding: '3vw'}}>
                    <SectionTitle>I'm Andrés, a Madrid based front-end developer.</SectionTitle>
                </Row>
                <Row>
                    <Col
                        xs={12} sm={12} md={6} lg={2} xl={2}
                        style={{
                            backgroundColor: this.props.theme.colors.primary_dark,
                            padding: '1vw'
                        }}
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
                                            xs={12} sm={12} md={12} lg={12} xl={12}
                                        >
                                            <ShowcaseText color={this.props.theme.colors.light}>
                                                {skill}
                                            </ShowcaseText>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col
                        xs={12} sm={12} md={6} lg={10} xl={10}
                        style={{
                            backgroundColor: this.props.theme.colors.primary_light,
                            padding: '1vw'
                        }}
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
                                        <Col
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
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col
                        xs={0} sm={0} md={0} lg={2} xl={2}
                        style={{
                            backgroundColor: this.props.theme.colors.secondary,
                            padding: '1vw'
                        }}
                    >
                        <AboutSubtitle>
                            Studies
                        </AboutSubtitle>
                    </Col>
                    <Col
                        xs={12} sm={12} md={12} lg={10} xl={10}
                        style={{
                            backgroundColor: this.props.theme.colors.primary_dark,
                            padding: '1vw'
                        }}
                    >
                        <Row>
                            {
                                this.props.content.studies.map((degree, index) => {
                                    return (
                                        <Col
                                            key={index}
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
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col
                        xs={0} sm={0} md={0} lg={2} xl={2}
                        style={{
                            backgroundColor: this.props.theme.colors.primary_dark,
                            padding: '1vw'
                        }}
                    >
                        <AboutSubtitle
                            color={this.props.theme.colors.secondary}
                        >
                            Workshops
                        </AboutSubtitle>
                    </Col>
                    <Col
                        xs={12} sm={12} md={12} lg={10} xl={10}
                        style={{
                            backgroundColor: this.props.theme.colors.primary_light,
                            padding: '1vw'
                        }}
                    >
                        <Row>
                            {
                                this.props.content.workshops.map((workshop, index) => {
                                    //console.log(workshop);
                                    return (
                                        <Col
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
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
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