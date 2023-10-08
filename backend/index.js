const express = require('express')
const app = express()

require("dotenv").config();
const BDconnectar = require("./config/conectarDB");
const { notFound, errorHanlder } = require("./middleware/erro");
const logger = require("./middleware/logger");
const path = require("path");
const helmet = require("helmet");
const cors = require('cors');


BDconnectar();

// Cors Policy

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);



// Helmet
app.use(helmet());



const port = process.env.PORT || 8000;


// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/autores", require("./routes/autor"));
app.use("/api/livros", require("./routes/livros"));




app.get('/', (req, res) => {
  res.send('Bem vindo ao nosso servidor!');
})

// Error Hanlder Middleware
app.use(notFound);
app.use(errorHanlder);

// connection db



app.listen(port, () => {
  console.log(`O servidor está a rodar na porta ${port}`)
})