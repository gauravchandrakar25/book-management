const express = require('express');
const {getAllBooks} = require('../controllers/booksController')
const router = express.Router();

router.get('/', getAllBooks);

// Implement other routes for GET /:id, POST /, PUT /:id, DELETE /:id

export default router;

