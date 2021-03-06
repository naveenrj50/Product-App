import React from "react";

import {NavLink} from "react-router-dom";


import store from "../store"
import * as actions from "../redux-cart/state/actions"
//Just example to learn redux api
//production apps should use react-redux pacakge



// react create instance for class component
// then calls inst.render() to get v.dom
export default class Header extends React.Component{

    constructor(){
        super(); // must
    }


    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        let action = actions.addItem(item);

        store.dispatch(action);
    }


    emptyCart = () => {
       
        let action = actions.emptyCart();

        store.dispatch(action);
    }

    componentDidMount () {
        store.subscribe ( () =>{
            console.log("HEADER SUBs");
            this.forceUpdate();
        })
    }


    render(){
      //react keywords
       //this.props.address.city='PUNE';

       let state = store.getState();
       let items = state.items;

        return (
            <div>
                <h2> { this.props.title }  </h2>
                <NavLink to="/" className="button" exact activeClassName="success"> Home </NavLink>
                <NavLink to="/cart" className="button" activeClassName="success" > Cart  [{items.length}]</NavLink>
                <NavLink to="/redux-cart" className="button" activeClassName="success" > Redux Cart  [{items.length}]</NavLink>
                <NavLink to="/about" className="button" activeClassName="success" > About </NavLink>
                <NavLink to="/products" className="button" activeClassName="success" > Products </NavLink>
                <NavLink to="/contact/india" className="button" activeClassName="success" > India </NavLink>
                <NavLink to="/contact/USA" className="button" activeClassName="success" > USA </NavLink>

                <button onClick={this.addItem}> Add item </button>
                <button onClick={this.emptyCart}> Empty Cart </button>
                <hr/>
            </div>
        );
    }
}