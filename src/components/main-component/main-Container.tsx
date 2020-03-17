import { connect } from "react-redux";
import { IState } from "../../reducer";
import { MainComponent } from "./main-Component";



const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.login.user
    }
}

export default connect(mapStateToProps)(MainComponent)