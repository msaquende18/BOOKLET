import React, {useEffect,useState} from 'react'
import LivroCard from './LivroCard';

import {} from 'react-icons/fa6'

const Livros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data));
  }, [])
  return (
    <div>
      <LivroCard livros={livros} headline="Livros Mais Vendidos" />
    </div>
  )
}

export default Livros