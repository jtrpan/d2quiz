import React, { Component } from 'react';
import TextLoop from "react-text-loop";
import Particles from 'react-particles-js';
import { Button, Icon } from 'semantic-ui-react'

import * as Styled from './LandingPage.style';
import Fade from "react-reveal/Fade";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:true
        }
    }
    componentDidMount() {
        if(this.state.open){
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        }
    }

    render() {
        return (

            <Styled.Wrapper>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 300,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                resize: true
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            },
                            "retina_detect": true

                        }
                    }} />
                <Styled.Heading>
                    <div className="landingBlock">
                        <span className="helloTitle">
                          Welcome, young <span> </span>
                        </span>
                        <TextLoop
                            interval={2500}
                            springConfig={{ stiffness: 30, damping: 10 }}
                            mask
                        >
                                <span className="scrollTitle">
                                  Guardian.
                                </span>
                            <span className="scrollTitle">
                                  Lightbearer.
                                </span>
                            <span className="scrollTitle">
                                  Wolf.
                                </span>
                        </TextLoop>
                        <br/>
                        <div className="city-link">
                            <Fade duration={1100} delay={1600}>
                                You think you know Destiny?
                            </Fade>
                        </div>
                        <br/><br/>
                        <Fade duration={1800} delay={3000}>
                        <a
                            href="quiz"
                            rel="noopener noreferrer"
                            className="city-link"
                            aria-label="UBC Website"
                        >
                  <span
                      tabIndex="-1"
                      className="city-link_content"
                  >
                    Challenge yourself in the ways of old.
                  </span>
                        </a>
                        </Fade>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        );
    }
}

export default Landing;