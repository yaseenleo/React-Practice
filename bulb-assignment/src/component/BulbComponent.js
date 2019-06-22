import React,{Component} from 'react';

export default class BulbComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bulbStatus: false
        }
        this.switch = this.switch.bind(this)
    }

    switch() {
        this.setState( state => ( {
            bulbStatus: !state.bulbStatus
        })
        )
    }
    render() {
        const bulbOn = <img src="img/bulbon.png" width="100px" />
        const bulbOff = <img src="img/bulbof.jpg" width="100px" />
        return(
            <div>
                {this.state.bulbStatus ? bulbOn : bulbOff} <br />
                <button onClick={this.switch}>Switch</button>
            </div>
        )
    }
}