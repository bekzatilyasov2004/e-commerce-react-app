import React from 'react';

const Navbar = ({ setSelectedCategory }) => {
    return (
        <div className='w-full flex justify-center items-center flex-wrap  gap-5'>
            <button 
                onClick={() => setSelectedCategory('All')}
                className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md hover:shadow-md hover:shadow-black border border-slate-900 text-slate-900'
                type='button'>
                All
            </button>
            <button 
                onClick={() => setSelectedCategory("Men's Clothing")}
                className='ease-out duration-300 hover:bg-[#181819] hover:text-white hover:shadow-md hover:shadow-black flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 text-slate-900'
                type='button'>
                Men's Clothing
            </button>
            <button 
                onClick={() => setSelectedCategory("Women's Clothing")}
                className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border hover:shadow-md hover:shadow-black border-slate-900 text-slate-900'
                type='button'>
                Women's Clothing
            </button>
            <button 
                onClick={() => setSelectedCategory('Jewelery')}
                className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md hover:shadow-md hover:shadow-black border border-slate-900 text-slate-900'
                type='button'>
                Jewelery
            </button>
            <button 
                onClick={() => setSelectedCategory('Electronics')}
                className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border hover:shadow-md hover:shadow-black border-slate-900 text-slate-900'
                type='button'>
                Electronics
            </button>
        </div>
    );
};

export default Navbar;
