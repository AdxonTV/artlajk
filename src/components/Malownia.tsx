import React from 'react'
import MalowniaHeader from './MalowniaHeader'
import MalowniaWorks from './MalowniaWorks'
import HorizontalScroll from './HorizontalScroll'
import CirclesSection from './CirclesSection'
import About from './About'
const Malownia = () => {
  return (
    <div className='flex mt-[-7vh]  md:gap-[100px] relative flex-col'>
        <MalowniaHeader/>

        <MalowniaWorks/>
 
       
       <HorizontalScroll></HorizontalScroll>
  
      <About></About>
      <CirclesSection></CirclesSection>
      <div className='h-[100vh]'></div>
    </div>
  )
}

export default Malownia