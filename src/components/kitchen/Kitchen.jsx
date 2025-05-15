import React from 'react'
import TableItem from './TableItem'

function Kitchen() {
  return (
    <>
        <h1>Tables</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
        </div>
    </>
  )
}

export default Kitchen