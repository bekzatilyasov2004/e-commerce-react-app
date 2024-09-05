import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useProductStore from '../store/store';

const Cart = () => {
  const cart = useProductStore((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0); // Calculate total price

  return (
    <div className='p-10'>
      <div className='flex flex-col justify-start items-center'>
        <h1 className='text-4xl font-[500]'>Cart</h1>
        <div className='w-[95%] mt-5 bg-gray-300 h-[1px]' />
        
        {cart.length === 0 ? (
          <div className='mt-5 gap-5 bg-[#f7f9fa] w-[95%] h-[250px] flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Your Cart is Empty</h1>
            <NavLink to={'/'}>
              <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-6 rounded-md border border-slate-900 text-slate-900'>
                <FaArrowLeft /> Continue Shopping
              </button>
            </NavLink>
          </div>
        ) : (
          <div className='mt-5 gap-5 bg-[#f7f9fa] w-[95%] flex flex-col'>
            {cart.map((item, index) => (
              <div key={index} className='flex justify-between items-center p-5 border-b bg-white rounded-md shadow-sm'>
                <div className='flex items-center gap-5'>
                  <img src={item.img} alt={item.name} width={70} className='rounded-md shadow-sm' />
                  <div>
                    <h1 className='font-semibold'>{item.name}</h1>
                    <p className='text-sm text-gray-500'>{item.p}</p>
                  </div>
                </div>
                <p className='text-lg font-semibold'>${item.price.toFixed(2)}</p>
              </div>
            ))}
            
            <div className='mt-5 p-5 bg-white rounded-md shadow-sm'>
              <h2 className='text-2xl font-semibold'>Order Summary</h2>
              <div className='flex justify-between mt-3'>
                <span className='text-lg'>Subtotal</span>
                <span className='text-lg font-semibold'>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='flex justify-center mt-5'>
                <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-6 rounded-md border border-slate-900 text-slate-900'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
