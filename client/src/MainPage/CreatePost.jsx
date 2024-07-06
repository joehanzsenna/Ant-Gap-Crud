import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [year, setYear] = useState()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        try{
            axios.post("http://localhost:5001/api/user/create", {title, author, year})
            console.log({title, author, year});
            navigate('/')
        }catch{
            console.log('error posting');
        }
    }

  return (
    <div className="createPost">
        <Navbar/>
      <div className="creatPost-content">

        <form onSubmit={submit} className="createPost-content-inner ">
            <h1>Create a post</h1>
          <div>
            <p>Title</p>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value) }/>
          </div>
          <div>
            <p>Author</p>
            <input type="text" placeholder="Author"  onChange={(e) => setAuthor(e.target.value) }/>
          </div>
          <div>
            <p>Year</p>
            <input type="text" placeholder="Year"  onChange={(e) => setYear(e.target.value) }/>
          </div>
          <div>
            <input type="submit" value="Post" className="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
