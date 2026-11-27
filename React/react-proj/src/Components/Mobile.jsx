import React, { useContext } from "react";
import { MobileContext } from "./MoblieContext";

function Mobile() {
    const mobile = useContext(MobileContext);
    console.log(mobile);

    return (
        <div>
            <h2>Mobile Page</h2>
            <p>Mobile : {mobile}</p>
        </div>
    );
}

export default Mobile;