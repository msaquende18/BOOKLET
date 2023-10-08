const asyncHandler = require("express-async-handler");
const {
  Autor,
  validarCadastrarAutor,
  validarActualizarAutor,
} = require("../models/Autor");

/**
 *  @desc    Get all authors
 *  @route   /api/authors
 *  @method  GET
 *  @access  public
 */
module.exports.verTodosAutores = asyncHandler(async (req, res) => {
  const { numeroPagina } = req.query;
  const autoresPorPagina = 2;

  const listaAutor = await Autor.find()
    .skip((numeroPagina - 1) * autoresPorPagina)
    .limit(autoresPorPagina);

  res.status(200).json(listaAutor);
});

/**
 *  @desc    Get author by id
 *  @route   /api/authors/:id
 *  @method  GET
 *  @access  public
 */
module.exports.verAutorById = asyncHandler(async (req, res) => {
  const autor = await Autor.findById(req.params.id);
  if (autor) {
    res.status(200).json(autor);
  } else {
    res.status(404).json({ message: "autor não encontrado" });
  }
});

/**
 *  @desc    Create new author
 *  @route   /api/authors
 *  @method  POST
 *  @access  private (only admin)
 */
module.exports.cadastrarAutor = asyncHandler(async (req, res) => {
  const { error } = validarCadastrarAutor(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const autor = new Autor({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    nacionalidade: req.body.nacionalidade,
    imagem: req.body.imagem,
  });

  const result = await autor.save();
  res.status(201).json(result);
});

/**
 *  @desc    Update an author
 *  @route   /api/authors/:id
 *  @method  PUT
 *  @access  private (only admin)
 */
module.exports.actualizarAutor = asyncHandler(async (req, res) => {
  const { error } = validarActualizarAutor(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const autor = await Autor.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        nacionalidade: req.body.nacionalidade,
        imagem: req.body.imagem,
      },
    },
    { new: true }
  );

  res.status(200).json(autor);
});

/**
 *  @desc    Delete an author
 *  @route   /api/authors/:id
 *  @method  DELETE
 *  @access  private (only admin)
 */
module.exports.eliminarAutor = asyncHandler(async (req, res) => {
  const autor = await Autor.findById(req.params.id);
  if (autor) {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "autor eliminado" });
  } else {
    res.status(404).json({ message: "autor não encontrado" });
  }
});
