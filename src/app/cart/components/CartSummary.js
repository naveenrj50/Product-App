// CartSummary.js
import React, {PureComponent, Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent , this implements shouldComponentUpdate
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    componentWillMount(){
        this.recalculate(this.props);
    }
    //TODO: componentWillReceiveProps, recalculate 

    componentWillReceiveProps(nextProps){
        console.log("Cart Summary receive props");
        console.log("current props",this.props);
        console.log("Next props",nextProps);

        if(this.props.count != nextProps.count &&
            this.props.amount != nextProps.amount){
            this.recalculate(nextProps);
        }
        
    }
 
    // Called when parent render called on update cycle [props]
    // Called when this.setState called on update cycle [state]
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("Cart Summary should update")
    //     //BAD for scalability
    //     if(this.props.count != nextProps.count || this.props.amount != nextProps.amount
    //          || this.state.discount != nextState.discount || this.state.grandTotal != nextState.grandTotal)
    //     {
    //         return true;
    //     }

    //     return false;
    //     //return  true:  //call render
    //     //return false: doesn't call render
    // }

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    amount: PropTypes.number,
    count : PropTypes.number.isRequired
}