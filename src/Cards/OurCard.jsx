import React from 'react'

const OurCard = ({url,text}) => {
  return (
    <div className='flex  flex-col border rounded-md justify-start items-center' >
        <img width={250} className={'rounded-md'} height={170} src={url} />
        <div className='p-5' >
        <h1>{text}</h1>
        </div>
    </div>
  )
}

export default OurCard
