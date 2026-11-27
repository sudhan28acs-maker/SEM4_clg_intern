import React, { useState } from 'react';

function Registration() {
    const [formdata, setformdata] = useState({
        username: ''
    });

    // 1. Pass 'e' parameter
    function handlechange(e) {
        // 2. Wrap spread and dynamic key in an object { ... }
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    // 3. Handle submit to prevent page refresh
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted Data:", formdata);
        alert(`Registered: ${formdata.username}`);
    }

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formdata.username}
                    onChange={handlechange}
                    placeholder="Enter username"
                />
                <br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;