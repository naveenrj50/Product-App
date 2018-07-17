import React from "react";

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
                <hr/>
            </div>
        );
    }
}