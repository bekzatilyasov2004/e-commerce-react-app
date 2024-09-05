
import React, { useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import ProductsData from '../constants/ProductsData';
import Navbar from './Navbar'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = ProductsData.filter((product) => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });
  return (
    <div className='p-10'>
    <div className=' flex flex-col justify-start items-center'>
      <div className='w-[100%] gap-5 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-[300]'>Latest Products</h1>
        <div className='w-[80%] bg-gray-300 h-[1px]' />
      </div>
      <div className='mt-10' >
        <Navbar setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='p-10 flex flex-wrap justify-center  gap-5'>
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} img={item.img} name={item.name} p={item.p} price={item.price} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Products
