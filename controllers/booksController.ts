const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
import { Request, Response } from "express";

//@desc get all books
//@route Get /api/books
//@access public

const getBooks = asyncHandler(async (req: Request, res: Response) => {});

//@desc get specific books
//@route Get /api/books/:id
//@access private

const getBook = asyncHandler(async (req: Request, res: Response) => {});

//@desc post book
//@route Get /api/books
//@access public

const addBook = asyncHandler(async (req: Request, res: Response) => {});

//@desc put book
//@route Get /api/books/:id
//@access public

const updateBook = asyncHandler(async (req: Request, res: Response) => {});

//@desc delete book
//@route Get /api/books/:id
//@access public

const deleteBook = asyncHandler(async (req: Request, res: Response) => {});

