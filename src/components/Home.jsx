import React, { useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import ProductsData from '../constants/ProductsData';
import Navbar from './Navbar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = ProductsData.filter((product) => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });

  return (
    <div className='flex gap-10 flex-col items-center justify-start'>
      <div className='gap-5 flex flex-col text-white justify-center px-[60px] bg-[url("../public/hero.jpg")] w-[98%] rounded-md h-[450px] bg-cover bg-center'>
        <h1 className='text-5xl font-[100]'>New Season Arrivals</h1>
        <h1 className='text-xl'>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </h1>
      </div>
      <div className='w-[100%] gap-5 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-[300]'>Latest Products</h1>
        <div className='w-[80%] bg-gray-300 h-[1px]' />
      </div>
      <div>
        <Navbar setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='p-10 flex flex-wrap justify-center  gap-5'>
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} img={item.img} name={item.name} p={item.p} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Home;
