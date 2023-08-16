const express = require("express");
const {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");
const router = express.Router();

router.get("/api/books", getAllBooks);
router.post("/api/books", addBook);
router.route("/api/books/:id").get(getBook).put(updateBook).delete(deleteBook);

export default router;
