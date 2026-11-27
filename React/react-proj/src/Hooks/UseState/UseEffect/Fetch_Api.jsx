import React , { useState, useEffect } from "react";

function Fetch_Api(){

    const[data,setdata] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => setdata(data.posts));
    }, []);
    return(
        <div>
            <h1>
                POST
            </h1>
             <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "90%", margin: "0 auto" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>tags</th>
                        <th>Reaction</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.tags ? post.tags.join(", ") : ""}</td>
                            <td>{post.reactions?.likes||0}</td>
                            <td>{post.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Fetch_Api;