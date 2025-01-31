import React from 'react'

const Cards = ({item}) => {
    return (
        <div className='p-3 '>
            <div className="dark:bg-slate-900 dark:text-white dark:border mt-4 mb-2 card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img
                        src={item.image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between ">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer border border-slate-300 rounded-full px-2 hover:bg-pink-500 hover:text-white duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
