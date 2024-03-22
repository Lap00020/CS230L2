import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import "../style.css"

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: "",
        cover: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId =location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value}))
        

    }
    const handleClick = async e => {
        try {
            await axios.put("http://localhost:8000/books/"+bookId, book)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(book)
    return (
        <div className="form">
            <h1>Update Book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>

            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>

            <input type="number" placeholder="price" onChange={handleChange} name="price"/>

            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    );
}

export default Update;