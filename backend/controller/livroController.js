const asyncHandler = require("express-async-handler");

const { Livro, validarCadastrarLivro, validarActualizarLivro } = require("../models/Livros");

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
 *  @desc    Cadastrar novo livro
 *  @route   /api/livros
 *  @method  POST
 *  @access  private (so admin)
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
 *  @desc    Actualizar  livro
 *  @route   /api/livros/:id
 *  @method  PUT
 *  @access  private (so admin)
 */
const actualizarLivro = asyncHandler(async (req, res) => {
  const { error } = validarActualizarLivro(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const actualizarLivro = await Livro.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        titulo: req.body.titulo,
        autor: req.body.autor,
        descricao: req.body.descricao,
        preco: req.body.preco,
        imagemLivro: req.body.imagemLivro,
      },
    },
    { new: true }
  );

  res.status(200).json(actualizarLivro);
});

const verLivrosAleatorios = asyncHandler(async (req, res) => {});

const LivrosCode = asyncHandler(async (req, res) => {});


/**
 *  @desc    Eliminar livro
 *  @route   /api/livro/:id
 *  @method  DELETE
 *  @access  private (so admin)
 */
const eliminarLivro = asyncHandler(async (req, res) => {
  const livro = await Livro.findById(req.params.id);
  if (livro) {
    await Livro.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Livro eliminado com sucesso!" });
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});



module.exports = {
  verTodosLivros,
  verLivroById,
  cadastarLivro,
  actualizarLivro,
  eliminarLivro,
};
