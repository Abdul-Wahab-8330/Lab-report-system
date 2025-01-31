import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div >
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    {/* Close Button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                        onClick={() => document.getElementById("my_modal_2").close()}>
                        ✕
                    </button>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className='dark:bg-slate-900 dark:text-white'>
                        <h3 className="font-bold text-2xl">Login</h3>

                        {/* Email */}
                        <div className='space-y-1 flex flex-col mt-10'>
                            <label className='text-gray-600 dark:text-white'>Email</label>
                            <input {...register("email", { required: "Email is required" })} 
                                type="email" required 
                                className='outline-none border py-2 px-2 rounded-lg dark:bg-slate-900 dark:text-white' 
                                placeholder='Enter your email' />
                            {errors.email && <span className='text-[12px] text-red-600'>{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='space-y-1 flex flex-col mt-4'>
                            <label className='text-gray-600 dark:text-white'>Password</label>
                            <input required minLength={5} {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters" }})} 
                                type="password" 
                                className='outline-none border py-2 px-2 rounded-lg dark:bg-slate-900 dark:text-white' 
                                placeholder='Enter your password' />
                            {errors.password && <span className='text-[12px] text-red-600'>{errors.password.message}</span>}
                        </div>

                        {/* Bottom */}
                        <br />
                        <div className='flex justify-between'>
                            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-100' 
                                type='submit'>
                                Login
                            </button>
                            <p className='text-[14px] mt-2'>
                                Not Registered? <Link className='underline text-blue-600' to='/signup'>Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Modal Backdrop */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default Login;
