import React from 'react'

function MenuItem({addItem, name, price}) {
  return (
    <div className='shadow-xl rounded-lg h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all'>

        <div className='overflow-hidden h-[55%] rounded-lg'>
            <img className='object-cover h-full w-full brightness-75' src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        </div>

        <div className='m-3 flex flex-col gap-3'>
            <h1 className='text-2xl'>{name}</h1>

            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className='flex flex-wrap gap-3'>
                <span className='bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold'>Category</span>
                <span className='bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold'>Category</span>
                <span className='bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold'>Category</span>
            </div>

            <div className='flex justify-end items-center mx-4'>
                <h2 className='text-xl font-bold bg-blue-400 text-white py-2 px-4'>{price} AZN</h2>
                <button onClick={() => {addItem(name)}} className='bg-blue-500 text-white py-2 px-4 rounded-e-full text-lg hover:bg-blue-700 transition-all'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem