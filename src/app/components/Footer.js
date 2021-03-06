

import React from "react";


//react calls function
//function comp returns Create and return Virtual DOM
//export default function Footer(props){
export default function Footer({title,year,address,children}){

    //es6, deconstruct
    //let {title,year} =props;

    return (
        <div>
            <hr/>
            <p> Copyrights @{year}. {title}  </p>
            <p>{address.city}, {address.state}</p>

            {/* content view moved here props.children */}
            {children}
            </div>
    )
}