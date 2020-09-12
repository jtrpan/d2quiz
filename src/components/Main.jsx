import React from "react";
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import perkQuiz from "./d2wperks/perkQuiz.js";


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/quiz" component={perkQuiz}/>
    </Switch>

)

export default Main;
