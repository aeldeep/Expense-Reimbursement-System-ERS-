import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, CardDeck, ButtonGroup } from 'reactstrap'
import { User } from '../../../models/user'
import { Reimbursement } from '../../../models/reimbursement'
import { ReimbursemetInfo} from '../displayReim-Component/displayReimComponent'
import { Redirect } from 'react-router'
interface IFindReimByStatusProps
{
    currentUser:User
    reimByStatus:Reimbursement[]
    errorMessage:string
    findReimByStatusActionMapper:(id:number)=>void
    researchReimByStatusActionMapper: () => void

}

export class findReimByStatusComponent extends React.Component<IFindReimByStatusProps,any>
{
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            userId:0
        }
    }
   


    Reset = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.findReimByStatusActionMapper(this.state.status)
}
submitReimStatus = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.findReimByStatusActionMapper(this.state.status)
}
updateReimStatus= (e: any) => {
    this.setState({
        status: e.currentTarget.value
    })
}


render(){

    let reimDisplay = this.props.reimByStatus.map((elem)=>{

        return <ReimbursemetInfo currentReim={elem} key={elem.reimbursementId}/>

        
                
    })
    
    return (
       !this.props.reimByStatus.length ?
<div>
    {console.log(this.props.reimByStatus.length)}
        <>
                  {/* a react Fragment, disappears on render */}
                      <Form onSubmit={this.submitReimStatus}>
                          <FormGroup row>
                              <Label for="reim Status" sm={3}>Reimbursement Status</Label>
                              <Col sm={6}>
                                    <h5>Reimbursement Status</h5>
                               <ButtonGroup>
                                    <Button color="primary" onClick={this.updateReimStatus} value={1} >Pending</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={2}>Approved</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={3}>Deny</Button>
                               </ButtonGroup>
                              </Col>
                          </FormGroup>
                          <Button color='info'>Search</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
     </>   
     </div>
     :     
     <div>    
           <>
                  {/* a react Fragment, disappears on render */}
                      <Form onSubmit={this.submitReimStatus}>
                          <FormGroup row>
                              <Label for="reim Status" sm={3}>Reimbursement Status</Label>
                              <Col sm={6}>
                                    <h5>Reimbursement Status</h5>
                               <ButtonGroup>
                                    <Button color="primary" onClick={this.updateReimStatus} value={1} >Pending</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={2}>Approved</Button>
                                    <Button color="primary" onClick={this.updateReimStatus} value={3}>Deny</Button>
                               </ButtonGroup>
                              </Col>
                          </FormGroup>
                          <Button color='info'>Search</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
     </>           
          <>
                        <CardDeck elementsPerRow={4}>
                            {reimDisplay}
                        </CardDeck>
                    </></div>
    )
}

}
