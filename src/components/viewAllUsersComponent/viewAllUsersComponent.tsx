import React from 'react'
import { User } from '../../models/user';
import { CardDeck } from '../general-component/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../userInfoComponent/user-info-component';
import { Redirect } from 'react-router';

interface IViewAllUsersProps {
    currentUser:User
    allUsers:User[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

     componentDidMount(){
        if(this.props.allUsers.length !== 0){

        }else if(this.props.currentUser.role === 'Admin'||'Finance-Manager'){
           // console.log('call getAll users mapper?');
            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        console.log('we are before ele');
        
        //turn array of users into display components
        let userDisplay = this.props.allUsers.map((ele)=>{

            console.log('ele');
            return <UserInfoComponent currentUser={ele} key={ele.userId}/>
                    
        })
        
        return(
            
            // check for role or redirect
            this.props.currentUser.role === 'Admin'||'Finance-Manager' ?
            <CardDeck  elementsPerRow={1} >
                {userDisplay}
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}