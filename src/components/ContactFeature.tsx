import React from 'react'
interface Props {
    subtitle: string;
    title: string;
    title2: string;
    className?: string;
}
const ContactFeature:React.FC<Props> = ({title, subtitle, title2, className}) => {
    
  return (
    <div className={className}>
        <div className='text-[16px]'>{subtitle}</div>
        <div className='text-[24px]'>{title}</div>
        <div className='leading-[90%] text-[24px]'>{title2}</div>
    </div>
  )
}

export default ContactFeature