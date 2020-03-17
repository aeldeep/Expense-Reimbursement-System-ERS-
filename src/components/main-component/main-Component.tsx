
import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { User } from '../../models/user'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserButton from '../general-component/button-component/user-button'
import ReimButton from '../general-component/button-component/reim-button'


interface IUserInfoProps{
    currentUser:User
}

export class MainComponent extends React.Component<IUserInfoProps,any>{


    render(){
        return(
            this.props.currentUser.userId ? 
           <div>
                
                    <Card>
                <CardTitle>{'Welcom  '+ this.props.currentUser.firstName} {this.props.currentUser.lastName}</CardTitle>
                
            </Card>
         
            <UserButton inNavbar/>
             
             <ReimButton />
           
                </div> 
            :
            <Redirect to='/'/>
        )
    }
}