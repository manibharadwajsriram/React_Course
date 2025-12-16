import React, { useEffect, useState } from "react";

function Getapi(){
    const [id,setId]=useState('1');
    const [posts, setPosts] = useState([]);
    function handleChange(e){
        e.preventDefault();
        setId(e.target.value);
    }
    useEffect(()=>{
        console.log("Fetching....");
        if(id){
            const post= async() =>{
                const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                    setPosts([data]);
                    console.log("Posts fetched:", posts);
                }
                post();
            }
        },
    [id]);
    return(
        <>
        <form>
            <label>ID: </label>
            <input type='text' name='id' value={id} onChange={handleChange}/>
        </form>
        {posts && posts.length > 0 ? (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No posts found</p>
                )}
        </>
    );
}

export default Getapi;