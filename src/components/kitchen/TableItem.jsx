import React from 'react'
import KitchenOrderItem from './KitchenOrderItem'

function TableItem() {
  return (
    <div className='shadow-xl rounded-lg hover:shadow-2xl transition-all h-[400px] '>
      <h1 className='border-b text-center text-xl font-medium py-2 mb-2'>Table 1</h1>
      <div className='flex flex-col gap-2 rounded-lg h-[346px] overflow-scroll'>
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
          <KitchenOrderItem />
      </div>
    </div>
  )
}

export default TableItem