import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Signup:React.FC = () => {
    const navigate=useNavigate();

    const handlesignUp=()=>{
        navigate('/login')
    }



  return (
    <div className='bg-gray-50 min-h-screen w-full flex justify-center items-center '>

        <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'>
        <h1 className='text-center text-2xl font-bold mb-3'>SignUp</h1>


        <div className='flex flex-col'>

        <Input type='text' placeholder='Enter Name' label='Name'/>

        <Input type='email' placeholder='abc@gmail.com' label='Email'/>

        <Input type='password' placeholder='Enter Password' label='Password'/>

        <Button onClick={handlesignUp}>
            SignUp
            </Button>

            <p className='text-center text-gray-500 mt-5'>Already Have Account ? <span className='text-blue-500 cursor-pointer ml-1 font-semibold' onClick={()=>navigate('/login')}>sign in</span></p>

            </div>

        </div>
      
    </div>
  )
}

export default Signup
