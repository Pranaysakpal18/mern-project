import React, { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
}


const Input:React.FC<InputProps> = ({label,...rest}) => {
  return (
    <div className='flex flex-col mb-4'>

        <label className='mb-1 font-semibold'>{label}</label>
        <input
        className='border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
         {...rest} />
      
    </div>
  )
}

export default Input
