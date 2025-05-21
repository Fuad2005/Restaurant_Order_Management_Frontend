import React from 'react'

function MenuItem({addItem, name, price, isTable, description, category, imgUrl}) {

    const [categoryMap, setCategoryMap] = React.useState({
        MAIN_COURSE: 'Main Course',
        APPETIZER: 'Appetizer',
        DESSERT: 'Dessert',
        DRINK: 'Drink'
    })


  return (
    <div className='shadow-xl rounded-lg h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all'>

        <div className='overflow-hidden h-[55%] rounded-lg'>
            <img className='object-cover h-full w-full brightness-75' src={imgUrl} alt="" />
        </div>

        <div className='m-3 flex flex-col gap-3'>
            <h1 className='text-2xl'>{name}</h1>

            <p>{description}</p>

            <div className='flex flex-wrap gap-3'>
                <span className='bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold'>{categoryMap[category]}</span>

            </div>

            <div className='flex justify-end items-center mx-4'>
                <h2 className='text-xl font-bold bg-blue-400 text-white py-2 px-4'>{price} AZN</h2>
                {isTable && <button onClick={() => {addItem(name)}} className='bg-blue-500 text-white py-2 px-4 rounded-e-full text-lg hover:bg-blue-700 transition-all'>Add</button>}
            </div>
        </div>
    </div>
  )
}

export default MenuItem