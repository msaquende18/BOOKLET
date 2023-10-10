import React, { useEffect, useState } from "react";
import LivroCard from "./LivroCard";
const OutrosLivros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data.slice(4, 10)));
  }, []);
  return (
    <div>
      <LivroCard livros={livros} headline="Livros Recentes" />
    </div>
  );
}

export default OutrosLivros