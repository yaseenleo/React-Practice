import React from 'react'

export default function DayTime() {

    const date = new Date()
    const hours = date.getHours()
    let days = date.getDay()
    const min = date.getMinutes()
    let timeOfDay;
    let day;

    const styles = {
        fontSize: 30,
        textAlign: "center"
    }

    if (hours < 12) {
        timeOfDay = "Morning"
        styles.color = "#04756f"
    }
    else if (hours >= 12) {
        timeOfDay = "Afternoon"
        styles.color = "#8914a3"
    }
    else {
        timeOfDay = "Night"
        styles.color = "#d90000"
    }

    switch(days) {
        case 0 :
            day = "Sunday";
            break;
        case 1 :
            day = "Monday";
            break;
        case 2 :
            day = "Tuesday";
            break;
        case 3 :
            day = "Wednesday";
            break;
        case 4 :
            day = "Thursday";
            break;
        case 5 :
            day = "Friday";
            break;
        case 6 :
            day = "Saturday";
            break;
    }


    return (
        <div>
            <h1 style={styles}>Good {timeOfDay}</h1>
            <p>{hours}:{min} today is {day}</p>
        </div>

    )
}