const express = require("express");
const {
  actualizarUsuario,
  verTodosUsuarios,
  verUsuarioById,
  eliminarUsuario,
} = require("../controller/usuarioController");
const router = express.Router();

const { verificarTokenEAutorizacao, verificarTokenEAdmin } = require("../middleware/verificarToken");
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../middleware/verifyToken");

// /api/usuarios
router.get("/", verifyTokenAndAdmin, verTodosUsuarios);

// /api/usuarios/:id
router
  .route("/:id")
  .put(verifyTokenAndAuthorization, actualizarUsuario)
  .get(verifyTokenAndAuthorization, verUsuarioById)
  .delete(verifyTokenAndAuthorization, eliminarUsuario);

module.exports = router;
