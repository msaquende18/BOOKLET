import React from 'react'
import Banner from '../banner/Banner';
import Livros from '../livros/Livros';
import LivrosFavoritos from '../livros/LivrosFavoritos';
import PromocaoBanner from '../banner/PromocaoBanner';
import OutrosLivros from '../livros/OutrosLivros';
import Avaliar from '../livros/Avaliar';

const Home = () => {
  return (
    <>
     <Banner />
     <Livros />
     <LivrosFavoritos />
     <PromocaoBanner />
     <OutrosLivros />
     <Avaliar />
    </>
  );
}

export default Home