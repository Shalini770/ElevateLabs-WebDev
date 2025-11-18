// Import Express
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" }
];

// Auto-increment ID
let nextId = 4;

// -------------------------
// GET /books - Get all books
// -------------------------
app.get("/books", (req, res) => {
  res.json(books);
});

// -------------------------
// POST /books - Add new book
// -------------------------
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);

  res.status(201).json(newBook);
});

// -------------------------
// PUT /books/:id - Update book
// -------------------------
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// -------------------------
// DELETE /books/:id - Remove book
// -------------------------
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  books.splice(index, 1);

  res.status(204).send();
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
