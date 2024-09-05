import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/store';
import { FaArrowLeft } from 'react-icons/fa';


const SinglePage = () => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const addToCart = useProductStore((state) => state.addToCart);
  const navigate = useNavigate();

  if (!selectedProduct) {
    navigate('/'); 
    return null;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 mb-6 text-teal-600 hover:text-teal-800"
      >
        <FaArrowLeft /> Back to Products
      </button>
      <div className="flex flex-col md:flex-row justify-around items-center gap-[20px] md:gap-[200px]">
        <div className="flex justify-center items-center">
          <img src={selectedProduct.img} alt={selectedProduct.name} className="w-36 md:w-56" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-start md:text-left">
          <h1 className="text-xl md:text-2xl font-bold">{selectedProduct.name}</h1>
          <h1 className="text-xl text-start mt-2">4.5 ⭐</h1>
          <h1 className="text-xl text-start font-semibold mt-2">${selectedProduct.price}</h1>
          <p className="mt-4 text-gray-700">{selectedProduct.p}</p>
          <div className="mt-6 flex sm:flex-row flex-col gap-4">
            <button 
              onClick={handleAddToCart} 
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleGoToCart} 
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
