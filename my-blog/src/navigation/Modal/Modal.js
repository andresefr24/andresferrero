import React from 'react';
import * as NavigationActionCreators from "../../reducers/NavigationReducer/actionCreators";
import connect from "react-redux/es/connect/connect";
import styled, {withTheme} from "styled-components";
import {Col, Container, Row} from 'reactstrap';

const BackgroundModalLayer = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    z-index:1000;
`;

const ModalContent = styled.div`
    width:100%;
    height:100%;
    padding:1vw;
`;

const ModalTitle = styled.p`
    font-size:25px;
    color:${props => props.theme.colors.primary_dark};
    text-align:center;
`;

class Modal extends React.Component {
    render() {
        //console.log(this.props.modal);
        if (this.props.modal.is_visible) {
            return (
                <BackgroundModalLayer
                    onClick={() => {
                        this.props.toggle_modal(false, undefined)
                    }}
                >
                    <Container fluid
                    >
                        <Row
                            style={{height: '100vh', alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Col
                                xs={12} sm={12} md={10} lg={6} xl={6}
                                style={{minHeight: '100px', backgroundColor: this.props.theme.colors.primary_light}}
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                {
                                    this.props.modal.content !== undefined ?
                                        <ModalContent>
                                            <ModalTitle>{this.props.modal.content.title}</ModalTitle>
                                            {
                                                this.props.modal.content.contents
                                            }
                                        </ModalContent>
                                        :
                                        null
                                }
                            </Col>
                        </Row>
                    </Container>
                </BackgroundModalLayer>
            )
        }
        else {
            return null
        }
    }
}


const mapStateToProps = (state) => {
    return {
        modal: state.NavigationReducer.modal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggle_modal: (val, content) => {
            dispatch(NavigationActionCreators.toggle_modal(val, content))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Modal));