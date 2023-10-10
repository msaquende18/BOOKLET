import React from 'react'
import { Link } from "react-router-dom";

const PromocaoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-blue-100 px-4 lg:px-24">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 leading-snug">
          Aproveita a grande promoção neste ano{" "}
        </h2>
        <Link to="/shop" className="block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
             Saber mais
          </button>
        </Link>
      </div>
      
    </div>
  );
}

export default PromocaoBanner