
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";

//return functions as props
//these props are passed to Cart Coponent

function mapDispatchToProps (dispatch){

    return {

        //Prop Name: function(){}
        addItem: function(){
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
    
            let action = actions.addItem(item);
            dispatch(action);
        },

        empty: bindActionCreators(actions.emptyCart,dispatch)
        // can be replaced by bindActionCreators
        // empty: function(){
        //     dispatch(actions.emptyCart())
        // }
    }

}


// return props as a data
function mapStateToProps(state){

    return {

        //propName: value from state

        cartLength: state.items.length

    }
}


let connectFn = connect(mapStateToProps,mapDispatchToProps);

// create and return container component
// container wraps Cart Component
let CartContainer = connectFn(Cart);

export default CartContainer;





// no state needed by cart component

// const mapStateToProps = (state) => {
//     return {
         
//     }
// }

// called only once per instance
// export const mapDispatchToProps = (dispatch) => {
//     return {
//         // actions is object, that contains
//         // all the binded methods
//         // which can dispatch
//         // comp => props.actions.addItem()
//         // comp => props.actions.empty(), shall dispatch
//         actions: bindActionCreators(actions, dispatch),

//         // props.addItem
//         //Till we get product data
//         addItem: function () {
//             let id = Math.ceil(Math.random() * 100000);
//             let item = {
//                 id, // syntatic sugar id: id
//                 name: `Product ${id}`,
//                 price:  100,
//                 qty: 1
//             }

//             dispatch(actions.addItem(item));
//         }
//     }
// }

// export default connect(null, 
//                     mapDispatchToProps) (Cart)