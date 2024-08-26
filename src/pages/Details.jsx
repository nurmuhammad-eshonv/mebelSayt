import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);   
  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data.attributes));
  }, [id]);

  if (!product) return <span className="loading loading-ring loading-lg absolute w-[500px] ml-[500px] mt-[60px]"></span>

  const handleColorClick = (color) => {
    setSelectedColor(color)
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-8 containerr">
      <div className="container mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{product.title}</h2>
          <h2 className='text-2xl'>{product.category}</h2>
          <h3 className="text-2xl ">{product.brand}</h3>
          <p className="text-2xl font-semibold ">${product.price}</p>
          <p className="">{product.description}</p>

          <div>
            <h4 className="text-xl font-semibold mb-2">Colors</h4>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => handleColorClick(color)}
                  className={`badge w-6 h-6 rounded-full ${selectedColor === color ? 'border-2 border-white' : 'border-2 border-transparent'}`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="amount" className="block text-lg font-medium mb-2">Amount</label>
            <select id="amount" className="select select-secondary select-bordered select-md w-[350px]">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
