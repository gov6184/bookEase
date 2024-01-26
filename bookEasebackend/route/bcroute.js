const express = require('express');
const router = express.Router();
const{bcmodal}=require("../modal/Bcmodal")

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await bcmodal.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await bcmodal.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new book
router.post('/books/add', async (req, res) => {
    
  try {
    const newBook = new bcmodal(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Update a book by ID
router.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await bcmodal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book by ID
router.delete('/books/:id', async (req, res) => {
  try {
    await bcmodal.findByIdAndDelete(req.params.id);
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
    router
};
