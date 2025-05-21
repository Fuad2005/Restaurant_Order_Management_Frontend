import React from 'react'
import WaiterOrderItem from './WaiterOrderItem'

function Waiter() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Waiter Orders</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            <WaiterOrderItem />
            <WaiterOrderItem />
            <WaiterOrderItem />
            <WaiterOrderItem />
            <WaiterOrderItem />
            <WaiterOrderItem />
        </div>
    </div>
  )
}

export default Waiter