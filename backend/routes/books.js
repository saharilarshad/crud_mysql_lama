import express from "express";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/book", addBook);
router.delete("/book/:id", deleteBook);
router.put("/book/:id", updateBook);

export default router;
