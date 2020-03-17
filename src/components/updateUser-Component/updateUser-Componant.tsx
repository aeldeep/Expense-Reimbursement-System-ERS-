import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, ButtonGroup } from 'reactstrap'
import { User } from '../../models/user'
import { Redirect } from 'react-router'


interface IUpdateUserProps
{
    userUpdate:User
    currentUser:User
    errorMessage:string
    updateUserActionMapper:(ui:number,un:string,ps:string,fn:string,ln:string,em:string,role:string)=>void
}

interface IUpdateUserState {
    userId: number  // primary key
	username: string  // not null  unique
	password: string  // not null
	firstName: string  // not null
	lastName: string  // not null
	email: string  // not null
    role :string
}

export class updateUserComponent extends React.Component<IUpdateUserProps,IUpdateUserState>
{
    
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            userId: 0,  // primary key
	        username: '',  // not null  unique
	        password: '',  // not null
	        firstName: '',  // not null
	        lastName: '',  // not null
	        email: '',  // not null
            role :''
        }
    }

submitUserUpdate = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.updateUserActionMapper(this.state.userId,this.state.username,this.state.password,this.state.firstName,this.state.lastName,this.state.email,this.state.role)
    this.setState({    
        userId:0,
        username: '',  // not null  unique
        password: '',  // not null
        firstName: '',  // not null
        lastName: '',  // not null
        email: '',  // not null
        role :''
    })
    
}
updateUserId = (e: any) => {

    this.setState({
        userId: e.currentTarget.value
    })
}
updateUsername = (e: any) => {

    this.setState({
        username: e.currentTarget.value
    })
}
updatePassword = (e: any) => {

    this.setState({
        password: e.currentTarget.value
    })
}
updateUserFirstName = (e: any) => {

    this.setState({
        firstName: e.currentTarget.value
    })
}
updateUserLastName = (e: any) => {

    this.setState({
        lastName: e.currentTarget.value
    })
}

updateUserEmail = (e: any) => {

    this.setState({
        email: e.currentTarget.value
    })
}
updateUserRole = (e: any) => {

    this.setState({
        role: e.currentTarget.value
    })
}
render() {
    return (
        this.props.currentUser.userId ?
        <div>
           {/* a react Fragment, disappears on render */}
            <> 
        {/* a react Fragment, disappears on render */}

        <Form onSubmit={this.submitUserUpdate}>
                          <FormGroup row>
                              <Label for="user Id" sm={3}>userId</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUserId} value={this.state.userId} 
                                  type="number" name="userId" id="userId" placeholder="Please Enter The User Id" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="First Name" sm={3}>First Name</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUserFirstName} value={this.state.firstName} 
                                  type='text' name="firstName" id="firstName" placeholder="Please Enter The First Name" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Last Name" sm={3}>Last Name</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUserLastName} value={this.state.lastName} 
                                  type='text' name="lastName" id="lastName" placeholder="Please Enter The Last Name" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="First Name" sm={3}>UserName</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUsername} value={this.state.username} 
                                  type='text' name="userName" id="userName" placeholder="Please Enter The UserName" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="password" sm={3}>password</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updatePassword} value={this.state.password} 
                                  type='text' name="password" id="password" placeholder="Please Enter The password" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Email" sm={3}>Email</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUserEmail} value={this.state.email} 
                                  type='email' name="email" id="email" placeholder="Please Enter The Email" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="role" sm={3}>Role</Label>
                              <Col sm={6}>
                                             <h5>User Role</h5>
                               <ButtonGroup >
                                    <Button color="primary" onClick={this.updateUserRole} value={"Admin"} required>Admin</Button>
                                    <Button color="primary" onClick={this.updateUserRole} value={"Finance-Manager"}>Finance-Manager</Button>
                                    <Button color="primary" onClick={this.updateUserRole} value={"User"}>User</Button>
                               </ButtonGroup>
                              </Col>
                              </FormGroup>
                              <br/>
                          <Button color='info'>Update</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
                </>
            
                  </div>
        :
        
        <Redirect to='/'/>
    )
}
}