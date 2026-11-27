import React from "react";
import Electronics from "./Electronics";

function Flipkart({mobile}) {

    console.log(mobile);
    return (
        <div>
            <h2>Flipkart Component</h2>
            {/*<p>{mobile}</p>*/}
            <Electronics mobile={mobile}/>
        </div>
    );
}

export default Flipkart;