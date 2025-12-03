import React, { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {


}

const Button:React.FC <ButtonProps> = ({children,...rest}) => {
  return (
    <button 
    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
    
    {...rest}>
        {children}
    </button>
  )
}

export default Button
