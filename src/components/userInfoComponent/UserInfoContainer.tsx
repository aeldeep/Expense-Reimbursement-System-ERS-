import { connect } from "react-redux";
import { UserInfoComponent } from "./user-info-component";
import { IState } from "../../reducer";



const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.login.user
    }
}

export default connect(mapStateToProps)(UserInfoComponent)