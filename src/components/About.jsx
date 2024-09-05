import React from 'react'
import OurCard from '../Cards/OurCard'
import { OurData } from '../constants/OurData'

const About = () => {
  return (
    <div className='p-10'>
      <div className=' flex flex-col justify-start items-center'>
        <h1 className='text-4xl font-[500]' >About Us</h1>
        <div className='w-[95%] mt-5 bg-gray-300 h-[1px]' />
        <div className='p-8'>
          <h1 className='text-xl font-[300] text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</h1>
        </div>
        <h1 className='text-3xl font-[500]'>Our Products</h1>
        <div className='flex gap-10 mt-10 flex-wrap items-center justify-center'>
          {OurData.map((item,index)=>(
            <OurCard key={index} url={item.url} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About