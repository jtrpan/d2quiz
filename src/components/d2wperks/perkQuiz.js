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
            open:true,
            quizStarted: false,
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
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 140,
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
                <Styled.Heading>
                    <div>
                        <br/><br/><br/>
                        <div className={this.state.quizStarted?"removed":"questionLine"}>
                            <Bounce left duration={1000}>
                                Ready to test your knowledge?
                            </Bounce>
                        </div>

                        <div>
                            <Fade duration={1000} delay={1500}>
                                <div className={this.state.quizStarted?"removed":"contact-link"} onClick={ () => {
                                    this.setState({ quizStarted: true })
                                }}>
                                    <span tabIndex="-1" className="contact-link_content">
                                        Start the quiz.
                                    </span>
                                </div>
                            </Fade>
                        </div>
                        <br/>
                        <br/>

                        <div className={this.state.quizStarted?"removed":"contactLine"}>
                            <Fade bottom cascade duration={1000} delay={2500}>
                                <div>
                                    Good luck, guardian.
                                </div>
                            </Fade>
                            <br/>
                            <Fade bottom cascade duration={1000} delay={4000}>
                                <div>
                                    You'll need it.
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        )
    }
}

export default perkQuiz;