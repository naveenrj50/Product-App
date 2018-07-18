import {createStore, combineReducers, applyMiddleware} from "redux";
import  cartReducer from "./redux-cart/state/cartReducer";


function loggerMiddleware(store){
    return function(nextFn){
            return function(action){
                console.log("logger middleware", action);

                // if(action.type == 'CART.EMPTY_CART'){
                //     return false;
                // }
                let result = nextFn(action);
                return result;
            }
    }
}

//const store = createStore(cartReducer);

const rootReducer = combineReducers({
        items: cartReducer,
        //counter: counterReducer
});

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));


export default store;

