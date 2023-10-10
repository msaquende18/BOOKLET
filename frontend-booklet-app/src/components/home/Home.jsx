import React from 'react'
import Banner from '../banner/Banner';
import Livros from '../livros/Livros';
import LivrosFavoritos from '../livros/LivrosFavoritos';
import PromocaoBanner from '../banner/PromocaoBanner';

const Home = () => {
  return (
    <>
     <Banner />
     <Livros />
     <LivrosFavoritos />
     <PromocaoBanner />
    </>
  );
}

export default Home