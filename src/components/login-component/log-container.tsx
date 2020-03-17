import { IState } from "../../reducer";
import { connect } from "react-redux";
import { LoginComponent } from "./loginComponent";
import { reimLoginActionMapper } from '../../action-maps/login-action-map'

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp
// this is how we choose what data to pass into a component
const mapStateToProps = (state:IState) =>{
    return {
        user:state.login.user,
        errorMessage:state.login.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    reimLoginActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)