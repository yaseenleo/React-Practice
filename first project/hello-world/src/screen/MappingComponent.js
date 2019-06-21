import React, { Component } from 'react';
import UserInfo from '../component/userInfo';
import userData from '../component/userData';

export default class MappingComponent extends Component {

    render() {

        const dataComponent = userData.map( user => <UserInfo key={user.Id} UserId={user.UserId} Title={user.Title} Body={user.Body} /> )

        return(
            <div style={{margin:20}}>
                {dataComponent}
            </div>
        )
    }
}