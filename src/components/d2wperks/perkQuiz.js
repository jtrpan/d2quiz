import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


import * as Styled from './perkQuiz.style';
import './perkQuiz.style.js';
import Particles from "react-particles-js";
import Quiz from 'react-quiz-component';
import { quiz1 } from './quiz.js';
import { quiz2 } from "./quiz2";
import { quiz3 } from "./quiz3";
import { quiz4 } from "./quiz4";

class perkQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:true,
            quizStarted: false,
            quiz2Started: false,
            quiz3Started: false,
            quiz4Started: false,
            finished: false,
            correct: 0,
            incorrect: 0,
            totalPoints: 0,
            userPoints: 0,
        }
    }
    componentDidMount() {
        if(this.state.open){
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        }
    }

    onCompleteAction1 = (obj) => {
        console.log(obj);
        return(
           this.setState({quiz2Started: true,})
        )
    }

    onCompleteAction2 = (obj) => {
        console.log(obj);
        return(
            this.setState({quiz3Started: true,})
        )
    }

    onCompleteAction3 = (obj) => {
        console.log(obj);
        return(
            this.setState({quiz4Started: true,})
        )
    }

    onCompleteAction4 = (obj) => {
        console.log(obj);
        return(
            this.setState({finished: true,})
        )
    }

    renderCustomResultPage = (obj) => {
        console.log(obj);
        return (
            <div>
                This is a custom result page. You can use obj to render your custom result page
            </div>
        )
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



                        <div className={this.state.quizStarted?"quizBlock":"removed"}>
                            <Quiz quiz={quiz1} showInstantFeedback={true} showDefaultResult={false} customResultPage={this.renderCustomResultPage} onComplete={this.onCompleteAction1}/>
                            <div className={this.state.quiz2Started?"quizBlock":"removed"}>
                                <Quiz quiz={quiz2} showInstantFeedback={true} showDefaultResult={false} customResultPage={this.renderCustomResultPage} onComplete={this.onCompleteAction2}/>
                            </div>
                            <div className={this.state.quiz3Started?"quizBlock":"removed"}>
                                <Quiz quiz={quiz3} showInstantFeedback={true} showDefaultResult={false} customResultPage={this.renderCustomResultPage} onComplete={this.onCompleteAction3}/>
                            </div>
                            <div className={this.state.quiz4Started?"quizBlock":"removed"}>
                                <Quiz quiz={quiz4} showInstantFeedback={true} showDefaultResult={false} customResultPage={this.renderCustomResultPage} onComplete={this.onCompleteAction4}/>
                            </div>
                        </div>
                        <div className={this.state.finished?"endBlock":"removed"}>
                            <span>Congrats, you've finished the quiz! While your score is saved internally, the scoring process itself is actually a little complicated.</span>
                            <br/><br/>
                            <span>I'm working on the logic right now, and my next step is going to be displaying the total score. After that, I'll add randomized questions.</span>
                            <br/><br/>
                            <span>For now, let's just say that you did - really well!</span>
                            <br/><br/>
                            <span>I'm sure you did well - I wouldn't have shared this with you if you weren't an avid Destiny fan.</span>
                            <br/><br/>
                            <span>I'm always looking for comments, inputs, and more questions - so if you have any ideas, pm me on Discord.</span>
                            <br/><br/>
                            <span>Special thanks to those who helped test and come up with questions - I really appreciate it.</span>
                            <br/>
                            <span>(Sorry you had to go through the same questions over and over again!)</span>
                            <br/><br/>
                            <span>Thank you for playing, I really hope you enjoyed it!</span>
                            <br/><br/>
                            <span>~ Trissin</span>
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