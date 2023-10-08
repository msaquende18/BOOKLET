const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {
  Usuario,
  validarRegistarUsuario,
  validarLoginUsuario,
} = require("../models/Usuario");

/**
 *  @desc    Register New User
 *  @route   /api/auth/register
 *  @method  POST
 *  @access  public
 */
module.exports.cadastrar = asyncHandler(async (req, res) => {
  const { error } = validarRegistarUsuario(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let usuario = await Usuario.findOne({ email: req.body.email });
  if (usuario) {
    return res.status(400).json({ message: "Este usuário já existe" });
  }

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  usuario = new Usuario({
    email: req.body.email,
    nome: req.body.nome,
    password: req.body.password,
  });

  const result = await usuario.save();
  const token = usuario.generateToken();

  const { password, ...other } = result._doc;

  res.status(201).json({ ...other, token });
});


/**
 *  @desc    Login User
 *  @route   /api/auth/login
 *  @method  POST
 *  @access  public
 */
module.exports.login = asyncHandler(async (req, res) => {
  const { error } = validateLoginUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  const token = user.generateToken();

  const { password, ...other } = user._doc;

  res.status(200).json({ ...other, token });
});