import { IState } from "../../../reducer";
import { connect } from "react-redux";
import { SubmiteReimComponent } from "./submiteReim-Component";
import {submiteReimActionMapper} from "../../../action-maps/submiteReim-Action-Map"


const mapStateToProps = (state:IState) =>{
    return {
        submiteReim:state.newReim.SubmiteReim,
        errorMessage: state.newReim.errorMessage,
        currentUser: state.login.user,
    }
}
const mapDispatchToProps = {
    submiteReimActionMapper
}
export default connect(mapStateToProps,mapDispatchToProps)(SubmiteReimComponent)