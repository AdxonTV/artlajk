import React from 'react'
interface Props {
    subtitle: string;
    title: string;
    title2: string;
    className?: string;
}
const ContactFeature:React.FC<Props> = ({title, subtitle, title2, className}) => {
    
  return (
    <div className={className} >
        <div className='md:text-[16px] text-[10px]'>{subtitle}</div>
        <div className='md:text-[24px] text-[14px]'>{title}</div>
        <div className='leading-[90%] md:text-[24px] text-[14px]'>{title2}</div>
    </div>
  )
}

export default ContactFeature