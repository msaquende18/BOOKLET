const express = require("express");
const {
  actualizarUsuario,
  verTodosUsuarios,
  verUsuarioById,
  eliminarUsuario,
} = require("../controller/usuarioController");
const router = express.Router();

const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../middleware/verifyToken");

// /api/usuarios
router.get("/", verifyTokenAndAdmin, verTodosUsuarios);

// /api/usuarios/:id
router
  .route("/:id")
  .put(verifyTokenAndAuthorization, actualizarUsuario)
  .get(verUsuarioById)
  .delete(verifyTokenAndAuthorization, eliminarUsuario);

module.exports = router;
