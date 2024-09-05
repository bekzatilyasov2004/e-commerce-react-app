import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/store';

const ProductCard = ({ img, name, p, price }) => {
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const addToCart = useProductStore((state) => state.addToCart);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const product = { img, name, p, price };
    setSelectedProduct(product);
    navigate('/product');  
  };

  const handleAddToCart = () => {
    const product = { img, name, p, price };
    addToCart(product); 
  };

  return (
    <div className='border rounded-md border-l-stone-400 gap-3 w-[300px] flex flex-col justify-around items-center xl:w-[400px] xl:gap-[5]'>
      <div className='flex flex-col justify-center items-center p-5'>
        <img src={img} alt={name} width={150} />
        <h1 className='text-xl font-[500]'>{name}</h1>
        <p>{p}</p>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-3'>
        <div className='w-full h-[1px] bg-gray-400' />
        <h1 className='text-xl'>${price}</h1>
        <div className='w-full h-[1px] bg-gray-400' />
      </div>
      <div className='py-5 flex justify-center items-center gap-10'>
        <button 
          onClick={handleBuyNow}
          className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3 rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900'
        >
          Buy Now
        </button>
        <button 
          onClick={handleAddToCart}
          className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3 rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
