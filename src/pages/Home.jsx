
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="containerr">
      <div className="flex justify-between gap-40 items-center mt-24">
        <div className="card1-left flex flex-col gap-10">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button id="btn" className="btn w-[150px] btn-secondary">
            OUR PRODUCTS
          </button>
        </div>

        <div className="card1-right">
          <div className="carousel w-[440px] h-[480px] carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
            {/* Carousel items */}
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black pb-5 mt-14">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          featured products
        </h2>
      </div>

      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product, index) => {
          return (
            <Link
              key={index}
              to={`/details/${product.id}`}
              className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">
                  {product.attributes.title}
                </h2>
                <span>${product.attributes.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
