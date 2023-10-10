import React from 'react'
import BannerCard from './BannerCard';
import imgLivro from '../../assets/livro-favorito/livro.png'

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-white flex items-center ">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 ">
        <div className="md:w-1/2 space-y-8 h-full ">
          <h2 className="text-5xl font-bold leading-snug text-black ">
            Ler e Vender Livros Nunca Foi Tão Fácil {" "}
            <span className="text-blue-700">
              Os Melhores Livros, com os preços melhores preços
              </span>
          </h2>
        
          <div>
            <input
              type="pesquisar"
              name="pesquisar"
              id="pesquisar"
              placeholder="pesquisar livro"
              className="py-2 px-2 rounded-s-sm outline-double "
            />
            <button className="bg-blue-700 px-7 py-2.5 rounded-s-sm text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Pesquisar
            </button>
          </div>
        </div>

        <div>
            <img src={imgLivro} alt='' />
        </div>

        {/* <div>
            <BannerCard />
        </div> */}
      </div>
    </div>
  );
}

export default Banner