
import React from 'react';
import {  RouteComponentProps } from 'react-router-dom';



interface IMessageComponentProps extends RouteComponentProps{
    message:string
}

export class MessageComponent extends React.Component<IMessageComponentProps,any>{

    render(){
        return(
        <p className="message-display">{this.props.message}</p>
        )
    }
}

