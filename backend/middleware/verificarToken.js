const jwt = require("jsonwebtoken");

// Verificar Token
function verificarToken(req, res, next) {
  const token = req.headers.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.usuario = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "token invalido" });
    }
  } else {
    res.status(401).json({ message: "falha ao acessar o token" });
  }
}

// Verificar Token & Autorizar usuario
function verificarTokenEAutorizacao(req, res, next) {
  verificarToken(req, res, () => {
    if (req.usuario.id === req.params.id || req.usuario.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "não estás autorizado a acessar este recurso" });
    }
  });
}

// Verificar Token & Admin
function verificarTokenEAdmin(req, res, next) {
  verificarToken(req, res, () => {
    if (req.usuario.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json({
          message:
            "não estás autorizado a acessar este recurso, acesso restrito para admin",
        });
    }
  });
}

module.exports = {
  verificarToken,
  verificarTokenEAutorizacao,
  verificarTokenEAdmin,
};
