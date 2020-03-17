import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, ButtonGroup } from 'reactstrap'
import { Redirect } from 'react-router'
import { Reimbursement } from '../../../models/reimbursement'
import { User } from '../../../models/user'

interface IUpdateReimProps{
    reimUpdate:Reimbursement
    errorMessage:string
    currentUser:User
 updateReimActionMapper:(r: number, a: string, b: number, c: string, d: string, e: string, f: string, g: string, h: string) => void
}

interface IUpdateReimState {
    reimbursementId: number
    author: string
    amount: number
    dateSubmitted: string
    dateResolved: string
    description: string
    resolver: string
    status: string
    type: string
}

export class UpdateReimComponent extends React.Component<IUpdateReimProps,IUpdateReimState>{
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            reimbursementId:0,
            author: '',
            amount: 0,
            dateSubmitted: '', 
            dateResolved: '',
            description: '', 
            resolver: '', 
            status: '', 
            type: '',
        }
    }

submitReimUpdate = async (e: SyntheticEvent) => {
    e.preventDefault()
    this.props.updateReimActionMapper(this.state.reimbursementId,this.state.author,this.state.amount,this.state.dateSubmitted,this.state.dateResolved,this.state.description,this.state.resolver,this.state.status,this.state.type)
    this.setState({    
        reimbursementId:0,
        author: '',
        amount: 0,
        dateSubmitted: '', 
        dateResolved: '',
        description: '', 
        resolver: '', 
        status: '', 
        type: '',
    })
    
}
updateReimId = (e: any) => {

    this.setState({
        reimbursementId: e.currentTarget.value
    })
}
updateReimAuthor = (e: any) => {

    this.setState({
        author: e.currentTarget.value
    })
}
updateReimAmount = (e: any) => {

    this.setState({
        amount: e.currentTarget.value
    })
}
updateReimDateSubmitted = (e: any) => {

    this.setState({
        dateSubmitted: e.currentTarget.value
    })
}
updateReimDateResolved = (e: any) => {

    this.setState({
        dateResolved: e.currentTarget.value
    })
}

updateReimDescription = (e: any) => {

    this.setState({
        description: e.currentTarget.value
    })
}
updateReimResolver = (e: any) => {

    this.setState({
        resolver: e.currentTarget.value
    })
}
updateReimStatus = (e: any) => {

    this.setState({
        status: e.currentTarget.value
    })
}
updateReimType = (e: any) => {

    this.setState({
        type: e.currentTarget.value
    })
}
render() {
    return (
        this.props.currentUser.userId ?
        <div>
           {/* a react Fragment, disappears on render */}
            <> 
        {/* a react Fragment, disappears on render */}

        <Form onSubmit={this.submitReimUpdate}>
                          <FormGroup row>
                              <Label for="reim Id" sm={3}>Reim Id</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimId} value={this.state.reimbursementId} 
                                  type="number" name="reimId" id="reimId" placeholder="Please Enter The ReimbursementId" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Author ID" sm={3}>Author ID</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimAuthor} value ={this.state.author}  
                                  type='number' name="AuthorName" id="AuthorName" placeholder="Please Enter The Author Name" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="amount" sm={3}>Amount</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimAmount} value={this.state.amount} 
                                  type='number' name="amount" id="amount" placeholder="Please Enter The Amount" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Submittied Date" sm={3}>Submittied Date</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimDateSubmitted} value={this.state.dateSubmitted} 
                                  type='date' name="Submittied Date" id="Submittied Date" placeholder="Please Enter The Submittied Date" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Resolver" sm={3}>Resolver ID</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimResolver} value={this.state.resolver} 
                                  type='number' name="Resolver" id="Resolver" placeholder="Please Enter The Resolver" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Resolved Date" sm={3}>Resolved Date</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimDateResolved} value={this.state.dateResolved} 
                                  type='date' name="Resolved Date" id="Resolved Date" placeholder="Please Enter The Resolved Date" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Description" sm={3}>Description</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimDescription} value={this.state.description} 
                                  type='text' name="Description" id="Description" placeholder="Please Enter The Description" required />
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="Reim Status" sm={3}>Reim Status</Label>
                              <Col sm={6}>
                                <h5>Reimbursement Status</h5>
                               <ButtonGroup>
                                    <Button color="primary" onClick={this.updateReimStatus} value={1} >Pending</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={2}>Approved</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={3}>Deny</Button>
                               </ButtonGroup>
                              </Col>
                              </FormGroup>
                              <br/>
                              <FormGroup row>
                              <Label for="type" sm={3}>Type</Label>
                              <Col sm={6}>
                                   <h5>Reimbursement Type</h5>
                               <ButtonGroup>
                                    <Button color="primary" onClick={this.updateReimType} value={101} >Loading</Button>
                                    <Button color="primary" onClick={this.updateReimType} value={102}>Travel</Button>
                                    <Button color="primary" onClick={this.updateReimType} value={103}>Food</Button>
                                    <Button color="primary" onClick={this.updateReimType} value={104}>Other</Button>
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
        
        <Redirect to='/main/reim-update'/>
    )
}
}