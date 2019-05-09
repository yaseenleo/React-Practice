import React, { Component } from 'react';
import { searchData } from '../config/api';
import countries from '../static/countries.js'

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            limit: 15
        }
    }

    onScroll(e) {   
        console.log('e.target.scrollHeight', e.target.scrollHeight);
        console.log('e.target.scrollTop', e.target.scrollTop);
        console.log('clientHeight', e.target.clientHeight)
        if(e.target.scrollHeight === Math.ceil(e.target.clientHeight + e.target.scrollTop)) {
            this.loadMore();
        }
    }

    loadMore() {
        console.log('loadmore ==>')
        this.setState({
            limit: this.state.limit + 15
        })
    }

    render() {
        const { limit } = this.state;
        const temp = [...countries];
        temp.length = limit; 

        return (
            <div onScroll={this.onScroll.bind(this)} style={{height: 300, overflow: 'scroll'}}>
                <ul>
                    {temp.map(country => {
                        return <li>{country.name}</li>
                    })}
                </ul>

                
            </div>
        )
    }
}