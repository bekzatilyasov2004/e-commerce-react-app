import React from 'react'
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' gap-2 w-full p-10 flex flex-col justify-center items-center' >
      <h1>Made with ❤️ by BekaDev </h1>
      <a href='https://github.com/bekzatilyasov2004' target={'_blank'}>
        <FaGithub size={'23px'} />
      </a>
    </div>
  )
}

export default Footer
