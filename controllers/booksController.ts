const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
import { Request, Response } from "express";

//@desc get all books
//@route Get /api/books
//@access public

const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//@desc get specific books
//@route Get /api/books/:id
//@access public

const getBook = asyncHandler(async (req: Request, res: Response) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//@desc add new book
//@route post /api/books
//@access public

const addBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    res.status(400);
    res.status(404).json({ message: "All fields are required" });

  }

  try {
    const book = await Book.create({
      // id: req.params.id,
      title,
      author,
      publishedYear,
    });

    if (book) {
      res.status(201).json({
        id: book.id,
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
      });
    } else {
      res.status(404);
      res.status(404).json({ message: "Entered data is not valid" });
    }
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//@desc update book detail
//@route put /api/books/:id
//@access public

const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findOne({ where: { id: req.params.id } });
  console.log(book);
  if (!book) {
    res.status(404);
    res.status(404).json({ message: "No book found" });
  }

  const updatedBook = await Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res
    .status(200)
    .json({ message: `${book.title} Updated successfully`,updatedBook });
});

//@desc delete a book
//@route del /api/books/:id
//@access public

const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    res.status(404);
    res.status(404).json({ message: "No book found" });
  }

  await Book.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: `${book.title} deleted successfully` });
});

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
