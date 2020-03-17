import { IState } from "../../reducer";
import { getAllUsersActionMapper } from '../../action-maps/view-user-action-map'
import { connect } from "react-redux";
import { ViewAllUsersComponent } from "./viewAllUsersComponent";



const mapStateToProps = (state:IState) => {
    return {
        allUsers:state.users.allUsers,
        errorMessage: state.users.errorMessage,
        currentUser: state.login.user
    }
}

const mapDispatchToProps = {

    
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)