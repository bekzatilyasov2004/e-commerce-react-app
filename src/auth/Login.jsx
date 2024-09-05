import React from 'react'
import {  NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='p-10'>
      <div className=' flex flex-col justify-start items-center'>
        <h1 className='text-4xl font-[500]' >Login</h1>
        <div className='w-[95%] mt-5 bg-gray-300 h-[1px]' />
        <div className='flex flex-col gap-5 mt-10 items-center justify-center'>
          <div className='flex flex-col gap-5' >
            <label form='email'>Email address</label>
            <input className='w-[300px] border p-2 rounded-md' type="email" id='email' placeholder='bekzatilyasov2704@gmail.com' />
          </div>
          <div className='flex flex-col gap-5' >
            <label form='password'>Password</label>
            <input className='w-[300px] border p-2 rounded-md' type="password" id='password' placeholder='Password' />
          </div>
          <div className='w-full flex justify-start items-start'>
            New Here? 
            <NavLink style={{color: 'Highlight', textDecoration: 'underline'}} to={'/register'}>
            Register</NavLink>
          </div>
          <div className='text-center' >
            <button className='w-[80px] text-white p-1.5 rounded-md cursor-pointer bg-[#6f7275]'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login