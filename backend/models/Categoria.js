const mongoose = require("mongoose");
const Joi = require("joi");

// Category Schema
const CategoriaSchema = new mongoose.Schema(
  {
    livro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Livro",
      required: true,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 250,
    },
  },
  {
    timestamps: true,
  }
);

// Category Model
const Categoria = mongoose.model("Categorai", CategoriaSchema);

// Validate Create Category
function validarCadastrarCategoria(obj) {
  const schema = Joi.object({
    categora: Joi.string().trim().required().label("Categoria"),
  });
  return schema.validate(obj);
}

module.exports = {
  Categoria,
  validarCadastrarCategoria,
};
