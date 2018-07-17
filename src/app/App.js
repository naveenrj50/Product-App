import React,{Component} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Cart from "./cart/components/Cart";

import "./App.css";

import {BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom';



// virtual dom
export default class App extends Component{

    constructor(){
        super();

        //react keyword, state
        //initialize state
        //state is owned by component
        this.state = {
            title: 'Product App',
            year: 2018,
            address: {city:'BLR', state:'KA'}
        } 
    }
    //react keyword
    // create & return virtual dom
    render(){
        
        // JSX 
        return (
            <Router>
            <div>
                <Header title={this.state.title} />
            <h1 id='myh'>Welcome to React</h1>
            {/* <Cart />
            <Home /> */}

            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/contact/:country" component={Contact} />
            <Route path="*" component={NotFound} />
            </Switch>   

            <Footer title="Product App"
                    year={2018} 
                    address= { this.state.address }>
                
                {/* content view */}
                <p> Contact time: 9:00 AM to 5:30 PM </p>
                <p> US time: 8:00 AM to 5:00 PM </p>
            
            </Footer>
            </div>
            </Router>
        );
        // return React.createElement('h1',
        //                             {id:'myh'},
        //                             'Welcome to React'
        //                             );


    }

}