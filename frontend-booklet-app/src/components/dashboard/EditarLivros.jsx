import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";


const EditarLivros = () => {
    const {id} = useParams();
    const {titulo, autor, descricao,  imagemLivro, preco} = useLoaderData();

  const editarLivroHandleSubmit = (event) => {
    event.preventDefault();
    const formulario = event.target;

    const titulo = formulario.titulo.value;
    const autor = formulario.autor.value;
    const imagemLivro = formulario.imagemLivro.value;
    const preco = formulario.preco.value;
    const descricao = formulario.descricao.value;

    console.log(titulo);

    const livroObj = {
      titulo,
      autor,
      imagemLivro,
      preco,
      descricao,
    };
    console.log(livroObj);

    fetch("http://localhost:9000/api/livros", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(livroObj),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        alert("Livro Editado Com Sucesso!!");
      })
    );
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold"> Editar Livros</h2>

      <form
        onSubmit={editarLivroHandleSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="titulo" value="Título do livro" />
            </div>
            <TextInput
              id="titulo"
              placeholder="Título do livro"
              required
              type="titulo"
              defaultValue={titulo}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="autor" value="ID do autor" />
            </div>
            <TextInput
              id="autor"
              placeholder="ID do autor"
              required
              type="autor"
            />
          </div>

          {/* <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="idcategoria" value="ID da Categoria" />
            </div>
            <TextInput
              id="idcategoria"
              placeholder="ID do autor"
              required
              type="idcategoria"
            />
          </div> */}
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imagemLivro" value="Imagem Livro" />
            </div>
            <TextInput
              id="imagemLivro"
              placeholder="Link Imagem"
              required
              type="imagemLivro"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="preco" value="Preço" />
            </div>
            <TextInput id="preco" placeholder="Preço" required type="preco" />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="descricao" value="Descrição" />
            </div>
            <Textarea
              id="descricao"
              placeholder=" Descrição do livro..."
              required
              rows={6}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Button type="submit" className="mt-5">
              Confirmar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarLivros