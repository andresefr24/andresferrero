import React from 'react';
import ExperimentContainer from "../../../containers/ExperimentContainer";
import {Col, Container, Row} from 'reactstrap';

class Experiment1 extends React.Component {

    state = {
        mouse: {
            x: 0,
            y: 0
        },
        shapes: Array(15).fill({
            size: 0,
            opacity: 0.4,
            type: 'square'
        }),
        rotation: 0,
        color: {
            r: 0,
            g: 255,
            b: 0
        },
    };

    mod_mouse_position = (e) => {
        let pX = e.pageX;
        let pY = e.pageY;
        let total_width = window.innerWidth;
        let total_height = window.innerHeight;
        let final_x = Math.round(-(total_width / 2 - pX) / total_width * 200);
        let final_y = Math.round(-(total_height / 2 - pY) / total_height * 200);

        this.setState({
            mouse: {
                x: final_x / 100,
                y: final_y / 100
            }
        })
    };

    mod_rotation = (value) => {
        this.setState({
            rotation: value
        })
    };

    render() {
        return (
            <ExperimentContainer
                onMouseMove={(e) => this.mod_mouse_position(e)}
            >
                {
                    this.state.shapes.map((shape, index) => {
                        let size = shape.size + (this.state.shapes.length - index) * 10;
                        return (
                            <div
                                key={index}
                                style={{
                                    width: size + 'vw',
                                    height: size + 'vw',
                                    backgroundColor: 'rgb(' + this.state.color.r + ',' + this.state.color.g + ',' + this.state.color.b + ')',
                                    opacity: shape.opacity - (this.state.shapes.length - index) * 0.025,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: -size / 2 + 'vw',
                                    marginLeft: -size / 2 + 'vw',
                                    transform: 'translate3d(' + -(this.state.mouse.x * size / 16) + 'vw,' + -(this.state.mouse.y * size / 16) + 'vw,0) rotateZ(' + this.state.rotation * 0.31416 * (index) + 'deg)',
                                    clipPath: 'polygon(50% 7%, 87% 29%, 87% 75%, 50% 93%, 13% 75%, 13% 29%)',
                                }}
                            />
                        )
                    })
                }
                <div
                    style={{
                        position: 'absolute',
                        bottom: 30,
                        left: 0,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row style={{justifyContent: 'center'}}>
                                    <p style={{color: 'white'}}>Rotation:</p>
                                </Row>
                                <Row style={{justifyContent: 'center'}}>
                                    <input
                                        type="range"
                                        min="-200"
                                        max="200"
                                        defaultValue="0"
                                        onChange={e => this.mod_rotation(e.target.value)}
                                        style={{
                                            left: '50%',
                                            width: '50%',
                                            background: '#fff'
                                        }}
                                    />
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                        <p style={{color: 'white'}}>Red:</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="255"
                                            defaultValue="0"
                                            onChange={e => this.setState({color:{...this.state.color,r:e.target.value}})}
                                            style={{
                                                left: '25%',
                                                width: '50%',
                                                background: '#fff'
                                            }}
                                        />
                                    </Col>
                                    <Col style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                        <p style={{color: 'white'}}>Green:</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="255"
                                            defaultValue="255"
                                            onChange={e => this.setState({color:{...this.state.color,g:e.target.value}})}
                                            style={{
                                                left: '25%',
                                                width: '50%',
                                                background: '#fff'
                                            }}
                                        />
                                    </Col>
                                    <Col style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                        <p style={{color: 'white'}}>Blue:</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="255"
                                            defaultValue="0"
                                            onChange={e => this.setState({color:{...this.state.color,b:e.target.value}})}
                                            style={{
                                                left: '25%',
                                                width: '50%',
                                                background: '#fff'
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ExperimentContainer>
        )
    }
}

export default Experiment1;