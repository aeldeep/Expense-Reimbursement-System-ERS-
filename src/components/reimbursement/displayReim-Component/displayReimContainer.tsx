
import { connect } from "react-redux";
import { IState } from "../../../reducer";
import { ReimbursemetInfo } from "./displayReimComponent";



const mapStateToProps = (state:IState) => {
    return {
        currentReim: state.reimByStatus.currentReim
    }
}


export default connect(mapStateToProps)(ReimbursemetInfo)