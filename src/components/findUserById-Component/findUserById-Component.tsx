import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { User } from '../../models/user'

interface IFindUserByIdProps
{
    currentUser:User
    userFound:User
    errorMessage:string
    findUserByIdActionMapper:(u:number)=>void
    
}

interface IFindUserByIdState {
    userId: number
}

export class findUserByIdComponent extends React.Component<IFindUserByIdProps,IFindUserByIdState>
{
    
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            userId:0
        }
    }
    

submitUserId = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.findUserByIdActionMapper(this.state.userId)
    // when we reach this point we don;t get that return value from the mapper
    // that value got hijacked and was sent to dispatch
    this.setState({
        userId:0
    })
    
}

updateUserId = (e: any) => {

    this.setState({
        userId: e.currentTarget.value
    })
}

render() {
    return (
        this.props.userFound.username ?
      
        
        <div>
<> 

                  {/* a react Fragment, disappears on render */}
                      <Form onSubmit={this.submitUserId}>
                          <FormGroup row>
                              <Label for="user Id" sm={3}>userId</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateUserId} value={this.state.userId} 
                                  type="number" name="userId" id="userId" placeholder="Please Enter The User Id" required />
                              </Col>
                          </FormGroup>
                          <Button color='info'>Search</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
</>
<Form>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>First Name</InputGroupText>
        </InputGroupAddon>
        <Input defaultValue= {`${this.props.userFound.firstName} `}/>
</InputGroup>
<br/>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Last Name</InputGroupText>
        </InputGroupAddon>
        <Input defaultValue= {`${this.props.userFound.lastName} `}/>
</InputGroup>
<br/>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>User Name</InputGroupText>
        </InputGroupAddon>
        <Input defaultValue= {`${this.props.userFound.username} `}/>
</InputGroup>
<br/>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>     Email @</InputGroupText>
        </InputGroupAddon>
        <Input  type='email' defaultValue= {`${this.props.userFound.email} `}/>
</InputGroup>
<br/>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Role </InputGroupText>
        </InputGroupAddon>
        <Input defaultValue= {`${this.props.userFound.role} `}/>
</InputGroup>

</Form>
                  </div>
        :
        
        <> 
        {/* a react Fragment, disappears on render */}
            <Form onSubmit={this.submitUserId}>
                <FormGroup row>
                    <Label for="user Id" sm={3}>userId</Label>
                    <Col sm={6}>
                        <Input onChange={this.updateUserId} value={this.state.userId} 
                        type="number" name="userId" id="userId" placeholder="Please Enter The User Id" required />
                    </Col>
                </FormGroup>
                <Button color='info'>Search</Button>

            </Form>
            <p>{this.props.errorMessage}</p>

        </>
    )
}
}