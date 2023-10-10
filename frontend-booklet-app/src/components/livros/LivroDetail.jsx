import React from 'react'
import { useLoaderData } from 'react-router-dom'


const LivroDetail = () => {
    const {_id, titulo, imagemLivro} = useLoaderData();

  return (
    <div className='mt-20 px-4 lg:px-24'>
        {/* <img src={imagemLivro} alt='Imagem Livro' /> */}
        {/* <h2>{titulo}</h2> */}
        Detalhes do Livro: {_id}
    </div>
  )
}

export default LivroDetail