import React from 'react'

const Contact = () => {
  return (
    <div className='p-10'>
      <div className=' flex flex-col justify-start items-center'>
        <h1 className='text-4xl font-[500]' >Contact Us</h1>
        <div className='w-[95%] mt-5 bg-gray-300 h-[1px]' />
        <div className='flex flex-col gap-5 mt-10 items-center justify-center'>
          <div className='flex flex-col gap-5' >
          <label form='name'>Name</label>
          <input className='w-[300px] border p-2 rounded-md' type="text" id='name' placeholder='Enter your name' />
          </div>
          <div className='flex flex-col gap-5' >
          <label form='email'>Email</label>
          <input className='w-[300px] border p-2 rounded-md' type="email" id='email' placeholder='bekzatilyasov2704@gmail.com' />
          </div>
          <div className='flex flex-col gap-5' >
          <label form='message'>Message</label>
          <textarea className='w-[300px]  border rounded-md p-2' placeholder='Enter your message' />
          <div className='text-center' >
          <button className='w-[80px] text-white p-1.5 rounded-md cursor-pointer bg-[#6f7275]'>
            Send
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact