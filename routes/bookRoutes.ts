const express = require("express");
const {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");
const router = express.Router();

router.route("/").post("/api/books", addBook).get("/api/books", getAllBooks);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
