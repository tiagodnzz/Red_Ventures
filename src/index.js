import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Question1 from './pages/question1/Question1';
import Question2 from './pages/question2/Question2';
import Question3 from './pages/question3/Question3';
import Allplants from './pages/allplants/Allplants';
import Plant from './pages/plant/Plant';
import Thank from './pages/thank/Thank';

const Rotas = (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/question1" component={Question1} />
        <Route path="/question2" component={Question2} />
        <Route path="/question3" component={Question3} />
        <Route path="/allplants" component={Allplants} />
        <Route path="/plant" component={Plant} />
        <Route path="/thank" component={Thank} />
    </Router>
)
ReactDOM.render(Rotas, document.getElementById('root'));