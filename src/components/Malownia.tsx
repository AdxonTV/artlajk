import React from 'react'
import MalowniaHeader from './MalowniaHeader'
import MalowniaWorks from './MalowniaWorks'

const Malownia = () => {
  return (
    <div className='flex gap-[30vh] my-[2vh] md:gap-[5vh] relative flex-col'>
        <MalowniaHeader/>
        <MalowniaWorks/>
       
    </div>
  )
}

export default Malownia