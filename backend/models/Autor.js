const mongoose = require("mongoose");
const Joi = require("joi");

const AutorSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    sobrenome: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    nacionalidade: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    imagem: {
      type: String,
      default: "default-avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

const Autor = mongoose.model("Autor", AutorSchema);

// Validar Cadastrar Autor
function validarCadastrarAutor(obj) {
  const schema = Joi.object({
    nome: Joi.string().trim().min(3).max(200).required(),
    sobrenome: Joi.string().trim().min(3).max(200).required(),
    nacionalidade: Joi.string().trim().min(2).max(100).required(),
    imagem: Joi.string(),
  });

  return schema.validate(obj);
}

// Validar Actualizar Autor
function validarActualizarAutor(obj) {
  const schema = Joi.object({
    nome: Joi.string().trim().min(3).max(200),
    sobrenome: Joi.string().trim().min(3).max(200),
    nacionalidade: Joi.string().trim().min(2).max(100),
    imagem: Joi.string(),
  });

  return schema.validate(obj);
}

module.exports = {
  Autor,
  validarCadastrarAutor,
  validarActualizarAutor,
};
