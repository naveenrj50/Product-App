import React from "react";

export default class Home extends React.Component{
        constructor(){
            super();

            this.state = {
                counter:0,
                title:'Home'
            }
        }
        

        //ES6
        increment(){
            console.trace();
            console.log("increment called");

            //BAD 1, mutate state directly
            this.state.counter++;
            console.log("counter",this.state.counter);

            //BAD 2 , callinf forceUpdate
            //call render
            this.forceUpdate();
        }

         //ES.next approach, to solve 'this'
         //create function only once per component
         decrement = () =>{
             console.trace();
            console.log("decrement called");

            // Good, for state mutation
            //this shall trigger render method
            //async method
            this.setState({
                counter:this.state.counter -1 
            });

            console.log("after decrement",this.state.counter);
        }


        render(){
            console.log("Home render");

            return (
                <div>
                    <h2> {this.state.title}</h2>
                    <p>Counter: {this.state.counter}</p>
                    <button onClick={() => this.increment() } > Incr </button>
                    <button onClick={this.decrement}>Decr </button>
                </div>
            )
        }
}