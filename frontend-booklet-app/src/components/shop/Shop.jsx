import React, { useEffect, useState } from "react";

import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa6";

const Shop = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data.slice(0, 8)));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center">
        Desfrute dos melhores livros aqui
      </h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-1">
        {livros.map((livro) => (
          <Card>
            <img
              src={livro.imagemLivro}
              alt="Imagem Livro"
              className="h-96"
            />

            <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              {livro.titulo}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Descrição do livro
            </p>
            <button className="bg-blue-700 text-base font-semibold text-white">Comprar</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

