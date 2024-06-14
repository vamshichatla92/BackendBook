const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route for adding a new book
router.post('/add-book', bookController.createBook);

module.exports = router;
