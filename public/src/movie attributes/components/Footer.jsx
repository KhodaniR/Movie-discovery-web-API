import React from 'react'
import { socialData , socialLabel} from '../constants/index';
const Footer = () => {
  return (
    <div className='mt-24 py-8 flex flex-col gap-10 items-center justify-center'>
        <div className='flex gap-8'>
            {socialData.map((image)=>(
                <img src={image} alt={image} key={image} className='w-8 h-8'/>
            ))}
        </div>
        <div className='flex gap-10'>
                {
                    socialLabel.map((item,index)=>(
                        <p key={index} className='text-xl font-bold'>{item.label}</p>
                    ))
                }
        </div>

        <div>
            <p>
            © 2021 MovieBox by Adriana Eka Prayudha
            </p>
        </div>



    </div>
  )
}

export default Footer