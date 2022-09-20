import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        cover: "",
        price: null,
      });
    
      const navigate = useNavigate();
    //   const location = useLocation().split("/")[2];
      const bookId = useLocation().pathname.split("/")[2];
      console.log(bookId)

    //   console.log(location.pathname)
    
      const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put("http://localhost:5000/book/"+ bookId, book);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      };
    
      console.log(book);
      return (
        <div className="form">
          <h1>Update The Book</h1>
          <input
            type="text"
            placeholder="Book Title"
            onChange={handleChange}
            name="title"
          />
          <input
            type="text"
            placeholder="Book desc"
            onChange={handleChange}
            name="desc"
          />
          <input
            type="text"
            placeholder="Book cover"
            onChange={handleChange}
            name="cover"
          />
          <input
            type="number"
            placeholder="Book price"
            onChange={handleChange}
            name="price"
          />
          <button className="formButton" onClick={handleUpdate}>Update Book</button>
        </div>
      );
}

export default UpdateBook