import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import { User } from '../../models/user'
import { Redirect } from 'react-router'


interface ILoginProps{
    user:User
    errorMessage:string
    reimLoginActionMapper:(u:string,p:string)=>void
}

interface ILoginState {
    username: string
    password: string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.reimLoginActionMapper(this.state.username, this.state.password)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
        this.setState({
            password:''
        })
    }


    updateUser = (e: any) => {

        this.setState({
            username: e.currentTarget.value
        })
    }
    updatePassword = (e: any) => {

        this.setState({
            password: e.currentTarget.value
        })
    }

    render() {
        return (
            this.props.user.userId ? 
            <Redirect to='/main'/>
            :
            <> 
            {/* a react Fragment, disappears on render */}
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="username" sm={3}>User Name</Label>
                        <Col sm={6}>
                            <Input onChange={this.updateUser} value={this.state.username} 
                            type="text" name="username" id="username" placeholder="Please Enter your username" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={3}>Password</Label>
                        <Col sm={6}>
                            <Input onChange={this.updatePassword} value={this.state.password} 
                            type="password" name="password" id="password" placeholder="Please Enter your password" required />
                        </Col>
                    </FormGroup>
                    <Button color='info'>Log In</Button>
                </Form>
                <p>{this.props.errorMessage}</p>
            </>
        )
    }
}