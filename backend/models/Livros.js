const mongoose = require("mongoose");
const Joi = require("joi");

// Livro Scheama
const LivroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 250,
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Autor",
    },
    descricao: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    preco: {
      type: Number,
      required: true,
      min: 0,
    },
    imagemLivro: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Book Model
const Livro = mongoose.model("Livro", LivroSchema);

// Validate Create Book
function validarCadastrarLivro(obj) {
  const schema = Joi.object({
    titulo: Joi.string().trim().min(3).max(250).required(),
    autor: Joi.string().required(),
    descricao: Joi.string().trim().min(5).required(),
    preco: Joi.number().min(0).required(),
    imagemLivro: Joi.string().required(),
  });

  return schema.validate(obj);
}

// Validate Update Book
function validarActualizarLivro(obj) {
  const schema = Joi.object({
    titulo: Joi.string().trim().min(3).max(250),
    autor: Joi.string(),
    descricao: Joi.string().trim().min(5),
    preco: Joi.number().min(0),
    imagemLivro: Joi.string(),
  });

  return schema.validate(obj);
}

module.exports = {
  Livro,
  validarCadastrarLivro,
  validarActualizarLivro,
};
