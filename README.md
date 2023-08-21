# Book Management API

This repository contains a RESTful API built using Node.js, TypeScript, Express.js, Sequelize, and MySQL for managing a collection of books. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on books and store them in a MySQL database.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Dockerization](#dockerization)

## Features

- Retrieve a list of all books
- Retrieve a specific book by its ID
- Add a new book to the collection
- Update an existing book by its ID
- Delete a book from the collection by its ID

A book has the following properties:

- id (string): Unique identifier for the book.
- title (string): Title of the book.
- author (string): Author of the book.
- publishedYear (number): Year of publication.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/gauravchandrakar25/book-management.git
   cd book-management

## API Endpoints
- GET /api/books: Retrieve a list of all books.
- GET /api/books/:id: Retrieve a specific book by its ID.
- POST /api/books: Add a new book to the collection.
- PUT /api/books/:id: Update an existing book by its ID.
- DELETE /api/books/:id: Delete a book from the collection by its ID.

## Dockerization

 ```bash
docker buildx - < DockerFile .
docker run -p 5001:5001 -d book-management
