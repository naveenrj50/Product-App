//action creators, helper function, create and return


import * as ActionTypes from "./action-types";


export function addItem(item){

    return {
        type:ActionTypes.ADD_ITEM,
        payload:{
               item:item
        }

    }
}


export function removeItem(id){

    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: { 
            id: id
        }
    }
}



export function updateItem(id, qty){

    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: {
            id, //es6 sugar
            qty
        }
    }
}


export function emptyCart(){

    return {
        type: ActionTypes.EMPTY_CART
    }
}