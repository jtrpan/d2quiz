import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import * as Styled from './perkQuiz.style';
import './perkQuiz.style.js';
import Particles from "react-particles-js";

class perkQuiz extends Component {
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
        return(
            <Styled.Wrapper>
                <Styled.Heading>
                    <div>
                        <br/>
                        <div className="questionLine">
                            <Bounce left duration={1000}>
                                Ready to test your knowledge?
                            </Bounce>
                        </div>

                        <div>
                            <Fade duration={1000} delay={1500}>
                                <a href="" rel="noopener noreferrer" className="contact-link" aria-label="Projects Page">
                                    <span tabIndex="-1" className="contact-link_content">
                                        Start the quiz.
                                    </span>
                                </a>
                            </Fade>
                        </div>
                        <br/>
                        <br/>

                        <div className="contactLine">
                            <Fade bottom cascade duration={1000} delay={2500}>
                                <div>
                                    Good luck, guardian.
                                </div>
                            </Fade>
                            <br/>
                        </div>
                    </div>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 120,
                                },
                                size: {
                                    value: 2
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "push"
                                    },
                                    resize: true
                                },
                            },
                            "retina_detect": true
                        }}
                    />
                </Styled.Heading>
            </Styled.Wrapper>
        )
    }
}

export default perkQuiz;