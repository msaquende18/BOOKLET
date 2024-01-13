import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {FaStar} from "react-icons/fa6"

import { Avatar } from "flowbite-react";

import fotografiaPerfil from '../../assets/fotoPerfil.jpg'
// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Avaliar = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
        Nossos Clientes
      </h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl  bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mauro Bento</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-4 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 ">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                  deserunt nobis suscipit eaque.
                </p>
                <Avatar
                  alt="avatar Foto"
                  img={fotografiaPerfil}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Saquende Jr.</h5>
                <p className="text-base">CEO, KIBIDI LDA</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Avaliar;
