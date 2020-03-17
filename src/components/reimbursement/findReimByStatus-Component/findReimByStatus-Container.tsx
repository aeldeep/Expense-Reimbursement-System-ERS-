import { IState } from "../../../reducer";
import { connect } from "react-redux";
import {findReimByStatusActionMapper} from "../../../action-maps/findReimByStatus-action-map"
import { findReimByStatusComponent } from "./findReimByStatus-Component";



const mapStateToProps = (state:IState) =>{
    return {
        reimByStatus:state.reimByStatus.reimStatus,
        errorMessage:state.reimByStatus.errorMessage,

        //currentUser: state.login.user
    }
}
//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    findReimByStatusActionMapper
}
//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(findReimByStatusComponent)





