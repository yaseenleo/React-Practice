import React, {Component} from 'react'
import jokesData from '../component/JokesData'
import JokeItems from '../component/JokeItems'

export default class Joke extends Component {

    
    render() {
        const jokeContainer = jokesData.map( joke => <JokeItems key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )

        return(
            <div>
                {jokeContainer}
            </div>
        )
    }
}