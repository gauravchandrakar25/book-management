const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
import { Request, Response } from "express";

//@desc get all books
//@route Get /api/books
//@access public

const getBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await Book.findAll({});
  res.status(200).json(books);
});

//@desc get specific books
//@route Get /api/books/:id
//@access public

const getBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findOne({ id: req.params.id });
  res.status(200).json(book);
});

//@desc add new book
//@route post /api/books
//@access public

const addBook = asyncHandler(async (req: Request, res: Response) => {
  console.log("The request body is ", req.body);
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const book = await Book.create({
    id: req.params.id,
    title,
    author,
    publishedYear,
  });
  res.status(201).json(book);
});

//@desc update book detail
//@route put /api/books/:id
//@access public

const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findOne(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("No book found");
  }

  const updatedBook = await Book.update(
    req.body,
    { new: true },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(updatedBook);
});

//@desc delete a book
//@route del /api/books/:id
//@access public

const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findOne(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("No book found");
  }

  await Book.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(book);
});

module.exports = {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
