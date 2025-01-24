import React from 'react'
import MalowniaHeader from './MalowniaHeader'
import MalowniaWorks from './MalowniaWorks'
import HorizontalScroll from './HorizontalScroll'
const Malownia = () => {
  return (
    <div className='flex gap-[30vh]  md:gap-[5vh] relative flex-col'>
        <MalowniaHeader/>
        <MalowniaWorks/>
        <div className=''>
       <HorizontalScroll></HorizontalScroll>
       </div>
    </div>
  )
}

export default Malownia