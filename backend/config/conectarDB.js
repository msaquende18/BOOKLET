const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.BD_URL);
    console.log("MongoDB CONECTADO ^_^");
  } catch (error) {
    console.log("Falha ao Conectar MongoDB!", error);
  }
};
