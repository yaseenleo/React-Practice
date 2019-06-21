import React, { Component } from 'react';
import ContactCard from '../component/ContactCard'

export default class Card extends Component {

    render() {

        return (
            <div>
                <ContactCard
                    contact={{ name: "lamborghini", imgUrl: "img/1.jpg", email: "abc.gmail.com", phone: "222 555 1234" }}
                />
                <ContactCard
                    contact={{ name: "lamborghini", imgUrl: "img/2.jpg", email: "xyz.gmail.com", phone: "222 114 1234" }}
                />
                <ContactCard
                    contact={{ name: "lamborghini", imgUrl: "img/3.jpg", email: "abc.yahoo.com", phone: "222 555 4567" }}
                />
            </div>
        )
    }
}