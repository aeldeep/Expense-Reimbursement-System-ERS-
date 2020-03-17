import { IState } from "../../../reducer";
import { connect } from "react-redux";
import {findReimByUserIdActionMapper} from "../../../action-maps/findReimByUserId-ActionMapper"
import { findReimByUserIdComponent } from "./findReimById-Componant";
const mapStateToProps = (state:IState) =>{
    return {
        reimByUserId:state.reimByUser.reimByUserId,
        errorMessage:state.reimByUser.errorMessage,
        //currentUser: state.login.user
    }
}
//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    findReimByUserIdActionMapper
}
//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(findReimByUserIdComponent)