const mongoose = require("mongoose");
const Joi = require("joi");


const reviewSchema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    rating: { type: Number, default: 0 },
    descricao: { type: String },
    livro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Livro",
    },
  },
  {
    timestamps: true,
  }
);