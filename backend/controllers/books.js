import db from "../db.js";

export const getBooks = async (req, res) => {
  const q = "SELECT * FROM crud.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const addBook = async (req, res) => {
  const q =
    "INSERT INTO crud.books (`title`,`desc`,`cover`,`price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully");
  });
};
export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE from crud.books WHERE id = ?";
  db.query(q, bookId, (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
};
export const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE crud.books SET `title`=?,`desc`=?,`cover`=?,`price`=? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
};
