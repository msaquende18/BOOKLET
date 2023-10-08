const express = require("express");
const router = express.Router();


const {
  verAutorById,
  actualizarAutor,
  eliminarAutor,
  verTodosAutores,
  cadastrarAutor,
} = require("../controller/autorController");
const { verificarTokenEAdmin } = require("../middleware/verificarToken");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

// /api/autores
router.route("/").get(verTodosAutores).post(verifyTokenAndAdmin, cadastrarAutor);

// /api/autores/:id
router
  .route("/:id")
  .get(verAutorById)
  .put(verifyTokenAndAdmin, actualizarAutor)
  .delete(verifyTokenAndAdmin, eliminarAutor);

module.exports = router;
