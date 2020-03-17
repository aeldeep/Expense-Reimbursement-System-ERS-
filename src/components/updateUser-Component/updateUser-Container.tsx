import { IState } from "../../reducer";
import { connect } from "react-redux";
import { updateUserComponent } from "./updateUser-Componant";
import {updateUserActionMapper} from "../../action-maps/updateUser-Action-Map"


const mapStateToProps = (state:IState) =>{
    return {
        userUpdate:state.upUser.userUpdate,
        errorMessage: state.upUser.errorMessage,
        currentUser: state.login.user,
        
        //currentUser: state.login.user
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    updateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(updateUserComponent)