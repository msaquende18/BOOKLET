const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const jwt = require("jsonwebtoken");

// User Schema
const UsuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    nome: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 200,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Gerar Token
UsuarioSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_SECRET_KEY
  );
};

//  Model Usuario
const Usuario = mongoose.model("Usuario", UsuarioSchema);

// Validate Register User
function validarRegistarUsuario(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    nome: Joi.string().trim().min(2).max(200).required(),
    password: passwordComplexity().required(),
  });
  return schema.validate(obj);
}

// Validate Login User
function validarLoginUsuario(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
}

// Validate Change Password
function validarMudarPalavraPasse(obj) {
  const schema = Joi.object({
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
}

// Validate Update User
function validarActualizarUsuario(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).email(),
    nome: Joi.string().trim().min(2).max(200),
    password: Joi.string().trim().min(6),
  });
  return schema.validate(obj);
}

module.exports = {
  Usuario,
  validarLoginUsuario,
  validarRegistarUsuario,
  validarActualizarUsuario,
  validarMudarPalavraPasse,
};
