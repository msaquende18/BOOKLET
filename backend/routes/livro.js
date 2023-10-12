const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

const { verTodosLivros, cadastarLivro, verLivroById, actualizarLivro, eliminarLivro } = require("../controller/livroController");

// /api/books
router.route("/").get(verTodosLivros).post(cadastarLivro);

// /api/books/:id
router
  .route("/:id")
  .get(verLivroById)
  .put(actualizarLivro)
  .delete(eliminarLivro);

module.exports = router;
