import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UploadLivro = () => {
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Fazer Upload dos Livros</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="idautor" value="ID do autor" />
            </div>
            <TextInput
              id="idautor"
              placeholder="ID do autor"
              required
              type="idautor"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadLivro