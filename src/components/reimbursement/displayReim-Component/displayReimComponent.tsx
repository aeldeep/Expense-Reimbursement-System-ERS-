import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Reimbursement } from "../../../models/reimbursement";
import React from "react";
import { Table } from 'reactstrap';


interface IReimInfoProps{
    currentReim:Reimbursement
}

export class ReimbursemetInfo extends React.Component<IReimInfoProps,any>{


    render(){
      if (this.props.currentReim.reimbursementId) {
        return(
            <Table hover bordered responsive >
              <br />
            <thead>
              
              <tr>
                <th>#</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>reimbursement Id :{this.props.currentReim.reimbursementId}  </td>
              </tr>
              <tr>
                <td>reimbursement Author :{this.props.currentReim.author}   </td>
              </tr>
              <tr>
                <td>reimbursement Amount :{this.props.currentReim.amount}   </td>
              </tr>
              <tr>
                <td>reimbursement Status :{this.props.currentReim.status}   </td>
              </tr>
              <tr>
                <td>reimbursement Type :{this.props.currentReim.type}   </td>
              </tr>
              <tr>
                <td>reimbursement Submitted Date :{this.props.currentReim.dateSubmitted}   </td>
              </tr>
              <tr>
                <td>reimbursement Resolver :{this.props.currentReim.resolver}   </td>
              </tr>
              <tr>
                <td>reimbursement Resolved Date :{this.props.currentReim.dateResolved}   </td>
              </tr>
              <tr>
                <td>reimbursement Description :{this.props.currentReim.description}   </td>
              </tr>
              
              </tbody>
              <br />
              </Table>
              )
      }
                else {
                  return(
                  <Redirect to='/main'/>
                  )
                }
             
          }
      }