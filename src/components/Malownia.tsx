import React from 'react'
import MalowniaHeader from './MalowniaHeader'
import MalowniaWorks from './MalowniaWorks'
import HorizontalScroll from './HorizontalScroll'
import About from './About'
const Malownia = () => {
  return (
    <div className='flex gap-[30vh]  md:gap-[5vh] relative flex-col'>
        <MalowniaHeader/>
      
        <MalowniaWorks/>
        <div className='md:mt-0 mt-[-60vh]'>
       <HorizontalScroll></HorizontalScroll>
       </div>
      <About></About>
    </div>
  )
}

export default Malownia