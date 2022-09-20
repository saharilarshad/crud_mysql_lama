import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/book", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className="form">
      <h1>Add New Book</h1>
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
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
};

export default AddBook;
