import React from 'react'
import KitchenOrder from './KitchenOrder'

function Kitchen() {
  return (
    <>
        <h1 className='text-center text-3xl font-bold'>Orders</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            <KitchenOrder />
            <KitchenOrder />
            <KitchenOrder />
            <KitchenOrder />
            <KitchenOrder />
            <KitchenOrder />
        </div>
    </>
  )
}

export default Kitchen