import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DayTime from '../component/DayTime';
import ObjectArray from '../component/objectArray';
import Card from '../screen/card';
import FunctionalComponent from '../component/functionalComponent';
import Joke from '../screen/Joke';
import MappingComponent from '../screen/MappingComponent';
import StatePractice from '../screen/StatePractice';
import Toggle from '../component/Toggle';
import Iteration from '../component/iteration';
import ConditionalRendering from '../component/conditionalRendering'

 
export default class Routing extends Component {

    render() {

        return(
            <div>
                <Router>

                <div>
                    <ul>
                        <li><Link to="/">Day Time Component</Link></li>
                        <li><Link to="/objectarray">Object Array</Link></li>
                        <li><Link to="/card">Contact Card</Link></li>
                        <li><Link to="/functionalComponent">Functional Component</Link></li>
                        <li><Link to="/joke">Joke Component</Link></li>
                        <li><Link to="/mappingcomponent">Mapping Component</Link></li>
                        <li><Link to="/statepractice">State Practice</Link></li>
                        <li><Link to="/toggle">Toggle</Link></li>
                        <li><Link to="iterate">Iteration</Link></li>
                        <li><Link to="conditionalrendering">Conditional Rendering</Link></li>
                    </ul>
                </div>

                    <Route exact path="/DayTime" component={DayTime} />
                    <Route path="/objectArray" component={ObjectArray} />
                    <Route path="/card" component={Card} />
                    <Route path="/functionalComponent" component={FunctionalComponent} />
                    <Route path="/joke" component={Joke} />
                    <Route path="/mappingcomponent" component={MappingComponent} />
                    <Route path="/statepractice" component={StatePractice} />
                    <Route path="/toggle" component={Toggle} />
                    <Route path="/iterate" component={Iteration} />
                    <Route path="/conditionalrendering" component={ConditionalRendering} />
                </Router>
            </div>
        )
    }
}