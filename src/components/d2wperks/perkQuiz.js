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
            numQuestions: 0,
            correct: 0,
            incorrect: 0,
            totalPoints: 0,
            correctPoints: 0,
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
           this.setState({
               quiz2Started: true,
               numQuestions: this.state.numQuestions + obj.numberOfQuestions,
               correct: this.state.correct + obj.numberOfCorrectAnswers,
               incorrect: this.state.incorrect + obj.numberOfIncorrectAnswers,
               totalPoints: this.state.totalPoints + obj.totalPoints,
               correctPoints: this.state.correctPoints + obj.correctPoints,
           })
        )
    }

    onCompleteAction2 = (obj) => {
        console.log(obj);
        return(
            this.setState({quiz3Started: true,
                numQuestions: this.state.numQuestions + obj.numberOfQuestions,
                correct: this.state.correct + obj.numberOfCorrectAnswers,
                incorrect: this.state.incorrect + obj.numberOfIncorrectAnswers,
                totalPoints: this.state.totalPoints + obj.totalPoints,
                correctPoints: this.state.correctPoints + obj.correctPoints,
            })
        )
    }

    onCompleteAction3 = (obj) => {
        console.log(obj);
        return(
            this.setState({quiz4Started: true,
                numQuestions: this.state.numQuestions + obj.numberOfQuestions,
                correct: this.state.correct + obj.numberOfCorrectAnswers,
                incorrect: this.state.incorrect + obj.numberOfIncorrectAnswers,
                totalPoints: this.state.totalPoints + obj.totalPoints,
                correctPoints: this.state.correctPoints + obj.correctPoints,
            })
        )
    }

    onCompleteAction4 = (obj) => {
        console.log(obj);
        return(
            this.setState({finished: true,
                numQuestions: this.state.numQuestions + obj.numberOfQuestions,
                correct: this.state.correct + obj.numberOfCorrectAnswers,
                incorrect: this.state.incorrect + obj.numberOfIncorrectAnswers,
                totalPoints: this.state.totalPoints + obj.totalPoints,
                correctPoints: this.state.correctPoints + obj.correctPoints,
            })
        )
    }

    renderCustomResultPage = (obj) => {
        console.log(obj);
        return (
            <div>

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
                        <br/><br/>
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
                                    <span tabIndex="-1" className={this.state.quizStarted?"removed":"contact-link_content"}>
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
                            <span>Congrats, you've finished the quiz! (At least, this current version of it.)</span>
                            <br/><br/>
                            <span>You scored {this.state.correctPoints} points out of {this.state.totalPoints} total points!</span>
                            <br/><br/>
                            <span>Don't worry about that score above. The current scheme is heavily tipped towards the really hard questions.</span>
                            <br/><br/>
                            <span>Basically, unless you answered most (or all) of the REALLY hard questions correctly, you probably didn't do too hot. (Gonna fix this soon.)</span>
                            <br/><br/>
                            <span>OR - if you did get a good score - you're actually cracked wtf. I'll try come up with some more challenging stuff for you in the future.</span>
                            <br/><br/>
                            <span>For now, these questions are static - I am currently working on adding randomization from a larger question bank. If you have question ideas, please share them with me!</span>
                            <br/><br/>
                            <span>I'm always looking for comments, inputs, and more tricky questions - so if you found a bug, or have any creative ideas, pm me on Discord.</span>
                            <br/><br/>
                            <span>Special thanks to those who helped test and come up with questions - I really appreciate it.</span>
                            <br/>
                            <span>(Sorry you had to go through the same questions over and over again!)</span>
                            <br/><br/>
                            <span>Thank you for playing, I really hope you enjoyed it.</span>
                            <br/><br/>
                            <span>~ Trissin</span>
                        </div>
                        <br/>
                        <br/>



                        <div className={this.state.quizStarted?"removed":"contactLine"}>
                            <Fade bottom cascade duration={1000} delay={2500}>
                                <div>
                                    Good luck, Guardian.
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

/*
<br/><br/>
                                <div className={this.state.quiz2Started?"":"removed"}>
                                    <h3>Stats:</h3>
                                    <span>{this.state.correctPoints}/{this.state.totalPoints} points scored.</span><br/>
                                    <span>{this.state.correct} correct answers.</span><br/>
                                    <span>{this.state.incorrect} incorrect answers.</span><br/>
                                    <span>{this.state.numQuestions} total questions.</span><br/>
                                </div>
 */