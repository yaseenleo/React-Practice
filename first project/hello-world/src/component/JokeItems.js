import React from 'react'

export default function JokeItems(props) {
    
    console.log(props)

    return(
        <div style={{margin:15}}>
            <h3 style={{display: props.question ? "block" : "none"}}>Questions: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888" }}>Answer: {props.punchLine}</h3>
            <hr />
        </div>
    )
}