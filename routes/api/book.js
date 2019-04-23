// import express Router and the book controller
const router = require("express").Router();
const bookController = require("../../controllers/book");

// Matches with "/api/book"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/book/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
