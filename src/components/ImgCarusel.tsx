import React from 'react'
import { useEffect, useState } from 'react'
const ImgCarusel = () => {
    const [first, setfirst] = useState(true)
    useEffect(() => {
        if(first){
            setfirst(false)
        }
    },[])
  return (
    <div>ImgCarusel</div>
  )
}

export default ImgCarusel