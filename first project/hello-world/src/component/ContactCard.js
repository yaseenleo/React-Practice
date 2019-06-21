import React, {Component} from 'react';

export default class ContactCard extends Component {

    render() {
        console.log(this.props)
        const styles = {

            cardContainer:{
                border: "1px solid black",
                margin: 10,
                padding: 10,
                // width: "40%"
            },
            cardHeading:{
                textAlign: "center",
                fontSize: 30,
            },
            imgContainer:{
                margin: "auto",
                textAlign: "center"
            }
        }

        return(
            <div style={styles.cardContainer} >
                <img style={styles.imgContainer} src={this.props.contact.imgUrl} />
                <h3 style={styles.cardHeading}>{this.props.contact.name}</h3>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
            </div>
        )
    }
}