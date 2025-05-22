import React from 'react'
import { LOCAL_BASE_URL } from '../../utils/variables';
import axios from 'axios';
import Swal from 'sweetalert2';


function MenuItem({addItem, name, itemId, price, isTable, description, category, imgUrl, token, getMenuItems, setType, setOpenPopup}) {

    const [categoryMap, setCategoryMap] = React.useState({
        MAIN_COURSE: 'Main Course',
        APPETIZER: 'Appetizer',
        DESSERT: 'Dessert',
        DRINK: 'Drink'
    })

    const handleDelete = React.useCallback(() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${LOCAL_BASE_URL}/menu-items/${itemId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(() => {
                    getMenuItems();
                })
            }
        })
    }, [getMenuItems, itemId, token])



    const handleEdit = React.useCallback(() => {
        setType(`Update-${itemId}`);
        setOpenPopup(true);
    }, [setOpenPopup, setType, itemId])






  return (
    <div className='relative shadow-xl rounded-lg h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all'>

        <div className='overflow-hidden h-[55%] rounded-lg'>
            <img className='object-cover h-full w-full brightness-75 ' src={imgUrl} alt="" />
        </div>

        <div className='m-3 flex flex-col gap-3'>
            <h1 className='text-2xl truncate'>{name}</h1>

            <p className='truncate'>{description}</p>

            <div className='flex flex-wrap gap-3'>
                <span className='bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold'>{categoryMap[category]}</span>

            </div>

            <div className='flex justify-end items-center mx-4'>
                <h2 className='text-xl font-bold bg-blue-400 text-white py-2 px-4'>{price} AZN</h2>
                {isTable && <button onClick={() => {addItem(name)}} className='bg-blue-500 text-white py-2 px-4 rounded-e-full text-lg hover:bg-blue-700 transition-all'>Add</button>}
            </div>


            {(token && !isTable) && <div className='absolute bottom-5 left-5 flex gap-2'>
                <button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 transition-all text-white p-3 text-xl rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
                <button onClick={handleEdit} className='bg-green-500 hover:bg-green-700 transition-all text-white p-3 text-xl rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                </button>
            </div> }


        </div>
    </div>
  )
}

export default MenuItem