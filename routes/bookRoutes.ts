const express = require("express");
const {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");
const router = express.Router();

router.route("/").post(addBook).get(getAllBooks);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
