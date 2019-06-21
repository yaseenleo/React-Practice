import React, {Component} from 'react';

export default class FunctionalComponent extends Component{

    MyInfo() {

        return(
            <div>
                <h3>Favourate places for vacation</h3>
                <ul>
                    <li>Turtle Beach</li>
                    <li>Forest Tour</li>
                    <li>Foreign Tour</li>
                </ul>
            </div>
        )
    }
    render(){

        return(
            <div>
                {this.MyInfo()}
            </div>
        )
    }
}