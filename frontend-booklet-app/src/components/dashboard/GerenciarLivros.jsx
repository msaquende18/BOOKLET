import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';


const GerenciarLivros = () => {

    const [todosLivros, setTodosLivros] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/api/livros").then(res => res.json()).then(data => setTodosLivros(data));
    }, []);


    const handleEliminarLivro = (id) => {
        console.log(id);
        fetch(`http://localhost:9000/api/livros/${id}`, {
            method: "DELETE",                             
        }).then(res => res.json()).then(data => {
          alert("Livro eliminado com sucesso!!!")
         
        } )
    }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl">Gerenciar livros</h2>

      {/** Tabela */}

      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Título</Table.HeadCell>
          <Table.HeadCell>Autor</Table.HeadCell>
          <Table.HeadCell>Preço</Table.HeadCell>
          <Table.HeadCell>
            <span>Gerenciar</span>
          </Table.HeadCell>
        </Table.Head>
        {todosLivros.map((livro, index) => (
          <Table.Body className="divide-y" key={livro._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{livro.titulo}</Table.Cell>
              <Table.Cell>{livro.autor.nome}</Table.Cell>
              <Table.Cell>
                {livro.preco}
                {"kz"}
              </Table.Cell>
              <Table.Cell>
                <Link 
                  className="font-medium text-cyan-600 dark:text-cyan-500"
                  to={`/admin/dashboard/editar-livros/${livro._id}`}
                >
                    Editar
                </Link>
                <button onClick={() => handleEliminarLivro(livro._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ml-10'>Apagar</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}

export default GerenciarLivros