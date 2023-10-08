const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { Usuario, validarActualizarUsuario } = require("../models/Usuario");

/**
 *  @desc    Update User
 *  @route   /api/users/:id
 *  @method  PUT
 *  @access  private (only admin & user himself)
 */
module.exports.actualizarUsuario = asyncHandler(async (req, res) => {
  const { error } = validarActualizarUsuario(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  const actualizarUsuario = await Usuario.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        email: req.body.email,
        password: req.body.password,
        nome: req.body.nome,
      },
    },
    { new: true }
  ).select("-password");

  res.status(200).json(actualizarUsuario);
});

/**
 *  @desc    Get All Users
 *  @route   /api/users
 *  @method  GET
 *  @access  private (only admin)
 */
module.exports.verTodosUsuarios = asyncHandler(async (req, res) => {
  const usuarios = await Usuario.find().select("-password");
  res.status(200).json(usuarios);
});

/**
 *  @desc    Get User By Id
 *  @route   /api/users/:id
 *  @method  GET
 *  @access  private (only admin & user himself)
 */
module.exports.verUsuarioById = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.params.id).select("-password");
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

/**
 *  @desc    Delete User
 *  @route   /api/users/:id
 *  @method  DELETE
 *  @access  private (only admin & user himself)
 */
module.exports.eliminarUsuario = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.params.id).select("-password");
  if (usuario) {
    await usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Usuário eliminado com sucesso!" });
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});
