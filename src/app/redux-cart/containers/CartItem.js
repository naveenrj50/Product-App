import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem from "../components/CartItem";
import * as actions from "../state/actions";

function mapDispatchToProps (dispatch){
    return {

        //TODO
        actions: bindActionCreators(actions,dispatch)
    }
} 



// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }

export default connect(null, 
                    mapDispatchToProps) (CartItem)