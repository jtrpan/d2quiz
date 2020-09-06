import React, { Component } from 'react';
import Particles from 'react-particles-js';

import * as Styled from './LandingPage.style';

import logo from "../logo.svg";

class Landing extends Component{
    constructor(props) {
        super(props);
        this.state={
            open:true
        }
    }
    componentDidMount() {
        if(this.state.open){
            window.scrollTo(0,0);
            document.body.style.overflow = 'hidden';
        }
    }

    render(){
        return(
            <Styled.Wrapper>
                <Styled.Heading>
                    <div className="landingBlock">
                        So you think you know Destiny, young Lightbearer?
                    </div>
                    <div className="subBlock">
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Challenge yourself in the ways of old.
                        </a>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        )
    }
}

export default Landing;