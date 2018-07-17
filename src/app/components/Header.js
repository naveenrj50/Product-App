import React from "react";

import {NavLink} from "react-router-dom";

// react create instance for class component
// then calls inst.render() to get v.dom
export default class Header extends React.Component{

    constructor(){
        super(); // must
    }


    render(){
      //react keywords
       //this.props.address.city='PUNE';

        return (
            <div>
                <h2> { this.props.title }  </h2>
                <NavLink to="/" className="button" exact activeClassName="success"> Home </NavLink>
                <NavLink to="/cart" className="button" activeClassName="success" > Cart </NavLink>
                <NavLink to="/about" className="button" activeClassName="success" > About </NavLink>
                <NavLink to="/contact/india" className="button" activeClassName="success" > India </NavLink>
                <NavLink to="/contact/USA" className="button" activeClassName="success" > USA </NavLink>
                <hr/>
            </div>
        );
    }
}