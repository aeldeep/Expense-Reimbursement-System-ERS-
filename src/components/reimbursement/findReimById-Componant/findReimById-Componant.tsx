import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, CardDeck } from 'reactstrap'
import { User } from '../../../models/user'
import { Reimbursement } from '../../../models/reimbursement'
import { ReimbursemetInfo} from '../displayReim-Component/displayReimComponent'
import { Redirect } from 'react-router'

interface IFindReimByStatusProps
{
    currentUser:User
    reimByUserId:Reimbursement[]
    errorMessage:string
    findReimByUserIdActionMapper:(id:number)=>void

}

export class findReimByUserIdComponent extends React.Component<IFindReimByStatusProps,any>
{
    constructor(props:any)
    {
        super(props)
        this.state = 
        {
            userId:0
        }
    }
   

    submitReimId = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.findReimByUserIdActionMapper(this.state.status)
}
updateReimUserId= (e: any) => {
    this.setState({
        status: e.currentTarget.value
    })
}


render(){

    let reimDisplay = this.props.reimByUserId.map((elem)=>{

        return <ReimbursemetInfo currentReim={elem} key={elem.reimbursementId}/>

        
                
    })
    
    return (
       !this.props.reimByUserId.length ?
<div>
    {console.log(this.props.reimByUserId.length)}
        <>
                  {/* a react Fragment, disappears on render */}
                      <Form onSubmit={this.submitReimId}>
                          <FormGroup row>
                              <Label for="reim User Id" sm={3}>Reimbursement User Id</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimUserId} value={this.state.status} 
                                  type="number" name="reimUserId" id="reimUserId" placeholder="Please Enter The User ID" required />
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
                      <Form onSubmit={this.submitReimId}>
                          <FormGroup row>
                              <Label for="reim User Id" sm={3}>Reimbursement User Id</Label>
                              <Col sm={6}>
                                  <Input onChange={this.updateReimUserId} value={this.state.status} 
                                  type="number" name="reimUserId" id="reimUserId" placeholder="Please Enter The User ID" required />
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
