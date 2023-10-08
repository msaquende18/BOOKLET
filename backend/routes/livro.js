const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

const { verTodosLivros, cadastarLivro, verLivroById, actualizarLivro, eliminarLivro } = require("../controller/livroController");

// /api/books
router.route("/").get(verTodosLivros).post(verifyTokenAndAdmin, cadastarLivro);

// /api/books/:id
router
  .route("/:id")
  .get(verLivroById)
  .put(verifyTokenAndAdmin, actualizarLivro)
  .delete(verifyTokenAndAdmin, eliminarLivro);

module.exports = router;
