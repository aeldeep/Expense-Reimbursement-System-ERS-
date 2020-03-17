import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, ButtonGroup } from 'reactstrap'
import { User } from '../../../models/user'
import { Redirect } from 'react-router'
import { Reimbursement } from '../../../models/reimbursement'


interface ISubmiteReimProps
{
    SubmiteReim:Reimbursement
    currentUser:User
    errorMessage:string
    submiteReimActionMapper:(am:number,des:string,ty:string)=>void
}

interface ISubmiteReimState {
    amount: number  // primary key
	description: string  // not null  unique
	type: string  // not null
	}

export class SubmiteReimComponent extends React.Component<ISubmiteReimProps,ISubmiteReimState>
{
    
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            amount: 0,  // primary key
	        description: '',  // not null  unique
	        type:'',  // not null
	   
        }
    }

submitNewReim = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.submiteReimActionMapper(this.state.amount,this.state.description,this.state.type)
    this.setState({    
        amount: 0,  // primary key
        description: '',  // not null  unique
        type:'',  // not null
    })
    
}
updateAmount = (e: any) => {

    this.setState({
        amount: e.currentTarget.value
    })
}
updateDescription = (e: any) => {

    this.setState({
        description: e.currentTarget.value
    })
}
updateType = (e: any) => {

    this.setState({
        type: e.currentTarget.value
    })
}

render() {
    return (
        this.props.currentUser.userId ?
        <div>


        <Form onSubmit={this.submitNewReim}>
                          <FormGroup row>
                              <Label for="Reim Amount" sm={3}>Reimbursement Amount</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateAmount} value={this.state.amount} 
                                  type="number" name="reimAmount" id="reimAmount" placeholder="Please Enter The Reimbursement Amount" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Reim Description" sm={3}>Reimbursement Description</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateDescription} value={this.state.description} 
                                  type='text' name="reimDescription" id="reimDescription" placeholder="Please Enter The Reimbursement Description" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Reim Type " sm={3}>Reimbursement type</Label>
                              <Col sm={6}>
                              <h5>Reimbursement Type</h5>
                               <ButtonGroup>
                                    <Button color="primary" onClick={this.updateType} value={101} >Loading</Button>
                                    <Button color="primary" onClick={this.updateType} value={102}>Travel</Button>
                                    <Button color="primary" onClick={this.updateType} value={103}>Food</Button>
                                    <Button color="primary" onClick={this.updateType} value={104}>Other</Button>
                               </ButtonGroup>
                              </Col>
                              </FormGroup>
                             
                              <br/>
                          <Button color='info'>Submite</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>

                  </div>
        :
        
        <Redirect to='/'/>
    )
}
}