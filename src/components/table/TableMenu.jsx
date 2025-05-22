import React from 'react'
import Menu from '../menu/Menu'

function TableMenu({id}) {
  return (
    <div>

        <div className='mx-8'>
            <Menu name={`Table ${id}`} isTable={id} />
        </div>
    </div>
  )
}

export default TableMenu