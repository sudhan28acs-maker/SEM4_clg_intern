import React, { useState } from 'react';

function Registration() {
    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handlechange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted Data:", formdata);
        alert(`Registered successfully: ${formdata.username}`);
    }

    return (
        <div className="flex justify-center items-center my-8">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1 text-left">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formdata.username}
                            onChange={handlechange}
                            placeholder="Enter username"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-800 bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formdata.email}
                            onChange={handlechange}
                            placeholder="Enter email"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-800 bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1 text-left">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formdata.password}
                            onChange={handlechange}
                            placeholder="Enter password"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-800 bg-gray-50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registration;