import React, { Component } from 'react';
import TitleBar from './TitleBar';
import moment from 'moment';

export default class Post extends Component {

    constructor() {
        super()
        this.state = {
            post_obj: {
                createdBy: "Mohammad Yaseen",
                profile: "",
                description: "",
                images: [],
                createdTime: Date.now(),
                likes:["affan","ahmed","duaa","usman","ifham","hamza"],
            }
        }
    }


    render() {

        return (
            <TitleBar />,
            <div style={styles.main}>
                <div style={styles.container}>

                </div>
            </div>
        );
    }
}

const styles ={
    main:{
        display:'block',
        width:'100%',
        height:'100%',
    },
    container:{
        width:'70%',
        margin:'0 auto',
        border:'1px solid black',
        marginTop:30,
    }
}