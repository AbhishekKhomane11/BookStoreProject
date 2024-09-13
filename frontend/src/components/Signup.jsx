import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen justify-center items-center'>
     <div className="w-[600px]">
     
        <div className="mt-4 space-y-4 modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Signup</h3>
          <div >
            <span>Name</span>
            <br/>
            <input type="text" placeholder='Enter your Name' className='w-80 px-3 border rounded-md outline-none'
            {...register("Name", { required: true })}
            />
          <br />
          {errors.Name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div >
            <span>Email</span>
            <br/>
            <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none'
            {...register("email", { required: true })}
            />
          <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            
          </div>
          <div>
            <span>Password</span>
            <br/>
            <input type="Password" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'
            {...register("Password", { required: true })}
            />
          <br />
          {errors.Password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
           
          <div className='flex justify-around mt-4 space-y-4'>
          <button className='bg-orange-500 text-white  rounded-md px-3 py-1 hover:bg-orange-700'
          >Sign up</button>
          <p>
            Already have an account?
            <button to='/Signup' className='underline text-blue-500 cursor-pointer'
            onClick={()=>
              document.getElementById("my_modal_5").showModal()
            }>Login</button><Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Signup