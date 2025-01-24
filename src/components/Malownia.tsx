import React from 'react'
import MalowniaHeader from './MalowniaHeader'
import MalowniaWorks from './MalowniaWorks'
import HorizontalScroll from './HorizontalScroll'
import About from './About'
const Malownia = () => {
  return (
    <div className='flex gap-[30vh]  md:gap-[5vh] relative flex-col'>
        <MalowniaHeader/>
        <div>
        <MalowniaWorks/>
       
       <HorizontalScroll></HorizontalScroll>
       </div>
      <About></About>
    </div>
  )
}

export default Malownia