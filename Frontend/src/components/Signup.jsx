import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <div className='flex justify-center items-center h-screen dark:bg-slate-900 dark:text-white'>
        {/* Increased width from 360px to 420px for better spacing */}
        <div id="my_modal_3" className="w-[420px] shadow-xl p-4 rounded-lg dark:border dark:border-slate-600">
          <div className="">
            <div className='flex flex-row-reverse justify-between'>
              {/* if there is a button in form, it will close the modal */}
              <Link className="btn btn-sm btn-circle btn-ghost relative right-2 top-2" to='/'>✕</Link>
              <h3 className="font-bold text-2xl">Sign Up</h3>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog">
              {/* Name */}
              <div className='space-y-1 flex flex-col mt-9'>
                <label className='text-gray-600 dark:text-white'>Name</label>
                <input
                  {...register("name", { required: "name is required" })}
                  minLength={3} type='text' className='dark:bg-slate-900 dark:text-white outline-none border py-2 px-2 rounded-lg' placeholder='Enter your Name' />
                {errors.name && <span className=' text-[12px] text-red-600'>{errors.name.message}</span>}
              </div>
              {/* email */}
              <div className='space-y-1 flex flex-col mt-4'>
                <label className='text-gray-600 dark:text-white'>Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email" className='dark:bg-slate-900 dark:text-white outline-none border py-2 px-2 rounded-lg' placeholder='Enter your email' />
                {errors.email && <span className='text-[12px] text-red-600'>{errors.email.message}</span>}
              </div>
              {/* password */}
              <div className='space-y-1 flex flex-col mt-4'>
                <label className='text-gray-600 dark:text-white'>Password</label>
                <input
                  {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters" } })}
                  type="password" className='dark:bg-slate-900 dark:text-white outline-none border py-2 px-2 rounded-lg' placeholder='Enter your password' />
                {errors.password && <span className='text-[12px] text-red-600'>{errors.password.message}</span>}
              </div>
              {/* bottom */}
              <br />
              <div className='flex justify-between'>
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-100'>SignUp</button>
                <p className='text-[15px] mt-2'>
                  Already have an account? <span className='underline text-blue-600 cursor-pointer' onClick={() => document.getElementById('my_modal_2').showModal()}>Login</span>
                </p>
                <Login />
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
