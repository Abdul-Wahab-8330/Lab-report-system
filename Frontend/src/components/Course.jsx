import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='pt-32  justify-center items-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12 '>This section offers a carefully curated selection of premium, paid books for your enjoyment. Dive into the world’s finest literary works and gain access to knowledge, inspiration, and entertainment like never before. Explore and enjoy the best books right here!</p>
            <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 '>Back</button>
            </Link>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>{
                    return <Cards item={item} key={item.id}/>
                })
            }
        </div>
    </div>
    </>
  )
}

export default Course
