const asyncHandler = require("express-async-handler");
const {
  validateCreateBook,
  validateUpdateBook,
  Book,
} = require("../models/Book");
const { Livro, validarCadastrarLivro } = require("../models/Livros");

/**
 *  @desc    Ver Todos Livros
 *  @route   /api/livros
 *  @method  GET
 *  @access  public
 */
const verTodosLivros = asyncHandler(async (req, res) => {
  const { precoMin, precoMax } = req.query;
  let livros;
  if (precoMin && precoMax) {
    livros = await Livro.find({
      preco: { $gte: precoMin, $lte: precoMax },
    }).populate("autor", ["_id", "nome", "sobrenome"]);
  } else {
    livros = await Livro.find().populate("autor", [
      "_id",
      "nome",
      "sobrenome",
    ]);
  }
  res.status(200).json(livros);
});

/**
 *  @desc    Ver Livro por id
 *  @route   /api/books/:id
 *  @method  GET
 *  @access  public
 */
const verLivroById = asyncHandler(async (req, res) => {
  const livro = await Livro.findById(req.params.id).populate("autor");
  if (livro) {
    res.status(200).json(livro);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});

/**
 *  @desc    Create new book
 *  @route   /api/books
 *  @method  POST
 *  @access  private (only admin)
 */
const cadastarLivro = asyncHandler(async (req, res) => {
  const { error } = validarCadastrarLivro(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const livro = new Livro({
    titulo: req.body.titulo,
    autor: req.body.autor,
    descricao: req.body.descricao,
    preco: req.body.preco,
    imagemLivro: req.body.imagemLivro,
  });

  const result = await livro.save();
  res.status(201).json(result);
});

/**
 *  @desc    Update a book
 *  @route   /api/books/:id
 *  @method  PUT
 *  @access  private (only admin)
 */
const updateBook = asyncHandler(async (req, res) => {
  const { error } = validateUpdateBook(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        cover: req.body.cover,
      },
    },
    { new: true }
  );

  res.status(200).json(updatedBook);
});

/**
 *  @desc    Delete a book
 *  @route   /api/books/:id
 *  @method  DELETE
 *  @access  private (only admin)
 */
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "book has been deleted" });
  } else {
    res.status(404).json({ message: "book not found" });
  }
});

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
