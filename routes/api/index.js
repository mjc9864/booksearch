// import api routes and express router
const router = require("express").Router();
const bookRoutes = require("./book");

// prefix book route endpoint with "/book"
router.use("/book", bookRoutes);

// export routes
module.exports = router;