import React from 'react'
import {  Table } from 'reactstrap'
import { User } from '../../models/user'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


interface IUserInfoProps{
    currentUser:User
}

export class UserInfoComponent extends React.Component<IUserInfoProps,any>{


    render(){
        return(
            this.props.currentUser.userId ? 
           
                <Table hover bordered responsive >
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</td>
          <td>{`${this.props.currentUser.username}`}</td>
          <td>{`${this.props.currentUser.email}`}</td>
          <td>@{`${this.props.currentUser.role}`}</td>
        </tr>
        </tbody>
        </Table>




            :
            <Redirect to='/main/users'/>
        )
    }
}