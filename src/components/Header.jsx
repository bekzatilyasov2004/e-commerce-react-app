import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidLogIn } from "react-icons/bi";
import { MdGroupAdd } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [open, setOpen] = useState(true)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='sticky bg-[#f7f9fa] top-0 w-full h-[90px] flex justify-around md:justify-evenly items-center'>
                <NavLink to={'/'}>
                <h1 className='font-bold text-2xl'>React Ecommerce</h1>
                </NavLink>
                <div className='hidden md:flex justify-around items-center gap-3'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'text-black' : 'text-gray-500'
                        }
                    >
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink
                        to='/products'
                        className={({ isActive }) =>
                            isActive ? 'text-black' : 'text-gray-500'
                        }
                    >
                        <h1>Products</h1>
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'text-black' : 'text-gray-500'
                        }
                    >
                        <h1>About</h1>
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? 'text-black' : 'text-gray-500'
                        }
                    >
                        <h1>Contact</h1>
                    </NavLink>
                </div>
                <div className='hidden md:flex justify-around items-center gap-3'>
                    <NavLink to={'login'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <BiSolidLogIn size={'20px'} />Login
                        </button>
                    </NavLink>
                    <NavLink to={'register'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <MdGroupAdd size={'20px'} />Register
                        </button>
                    </NavLink>
                    <NavLink to={'cart'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <IoCart size={'20px'} />Cart
                        </button>
                    </NavLink>
                </div>
                <button onClick={toggle} className='block md:hidden p-1.5 rounded-md border border-slate-900 hover:shadow-md hover:shadow-black ' >
                    <RxHamburgerMenu size={'25px'} />
                </button>
            </div>
            <div className={`${open ? 'hidden' : 'flex'} sticky top-[80px] gap-5 w-[100%] bg-transparent backdrop-blur-sm p-5 justify-start flex-col items-center`} >
                <NavLink
                onClick={()=>setOpen(!open)}
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'text-black' : 'text-gray-500'
                    }
                >
                    <h1>Home</h1>
                </NavLink>
                <NavLink
                onClick={()=>setOpen(!open)}
                    to='/products'
                    className={({ isActive }) =>
                        isActive ? 'text-black' : 'text-gray-500'
                    }
                >
                    <h1>Products</h1>
                </NavLink>
                <NavLink
                onClick={()=>setOpen(!open)}
                    to='/about'
                    className={({ isActive }) =>
                        isActive ? 'text-black' : 'text-gray-500'
                    }
                >
                    <h1>About</h1>
                </NavLink>
                <NavLink
                onClick={()=>setOpen(!open)}
                    to='/contact'
                    className={({ isActive }) =>
                        isActive ? 'text-black' : 'text-gray-500'
                    }
                >
                    <h1>Contact</h1>
                </NavLink>
                <div className='flex flex-wrap justify-around items-center gap-3'>
                    <NavLink
                    onClick={()=>setOpen(!open)} to={'login'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <BiSolidLogIn size={'20px'} />Login
                        </button>
                    </NavLink>
                    <NavLink
                    onClick={()=>setOpen(!open)} to={'register'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <MdGroupAdd size={'20px'} />Register
                        </button>
                    </NavLink>
                    <NavLink
                    onClick={()=>setOpen(!open)} to={'cart'}>
                        <button className='ease-out duration-300 hover:bg-[#181819] hover:text-white flex justify-around items-center gap-3 h-10 px-3  rounded-md border border-slate-900 hover:shadow-md hover:shadow-black text-slate-900' type='button'>
                            <IoCart size={'20px'} />Cart
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
