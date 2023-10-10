import React from 'react'
import imgFavorito from '../../assets/livro-favorito/prateleira-livro.jpg'
import { Link } from 'react-router-dom';

const LivrosFavoritos = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <img src={imgFavorito} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Encontre os teus
        </h2>{" "}
        <span className="text-blue-700">Livros Favoritos Aqui!</span>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 ">
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-base">Livros Registados</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">400+</h3>
            <p className="text-base">Usuários Regisados</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">3000+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>

        <Link to="/shop" className='mt-12 block'>
            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Explorar Mais
            </button>
        </Link>
      </div>
    </div>
  );
}

export default LivrosFavoritos