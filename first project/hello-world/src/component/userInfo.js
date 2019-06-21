import React from 'react';

export default function UserInfo(props) {

    return(
        <div>
            <h3>User ID: {props.UserId}</h3>
            <h3>Title: {props.Title}</h3>
            <p>{props.Body}</p>
            <hr />
        </div>
    )
}