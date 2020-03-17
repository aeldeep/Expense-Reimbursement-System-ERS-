import { connect } from "react-redux";
import {updateReimActionMapper} from "../../../action-maps/updateReim-Action-Map"
import { IState } from "../../../reducer";
import { UpdateReimComponent } from "./updateReim-Componant";


const mapStateToProps = (state:IState) =>{
    return {
        updateReimInfo:state.upReim.updateReimInfo,
        errorMessage: state.upReim.errorMessage,
        currentUser: state.login.user,
          }
}
const mapDispatchToProps = {
    updateReimActionMapper
}

export default  connect(mapStateToProps,mapDispatchToProps)(UpdateReimComponent)