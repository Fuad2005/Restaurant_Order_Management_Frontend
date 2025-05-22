import React from 'react'
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';

function MenuItemCreate({openPopup, setOpenPopup, token, type, getMenuItems}) {


    const [itemData, setItemData] = React.useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        imageUrl: ''
    })



    const resetItemData = React.useCallback(() => {
        setItemData({
            name: '',
            description: '',
            price: 0,
            category: '',
            imageUrl: ''
        })
    }, [])

    const handleForm = React.useCallback((e) => {
        e.preventDefault();

        setItemData({
            ...itemData,
            [e.target.id]: e.target.value
        })
    }, [itemData])

    React.useEffect(() => {
        if (type.includes('Update')) {
            const itemId = type.split('-')[1];
            axios.get(`${LOCAL_BASE_URL}/menu-items/${itemId}`).then((res) => {
                setItemData({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    category: res.data.category,
                    imageUrl: res.data.imageUrl
                })
            })
        } else {
            resetItemData()
        }
    }, [type, resetItemData, openPopup])







    const handleSubmit = React.useCallback((e) => {
        e.preventDefault()
        if (type === 'Create') {
            axios.post(`${LOCAL_BASE_URL}/menu-items`, {
                name: itemData.name,
                description: itemData.description,
                price: itemData.price,
                calories: 100,
                weight: 10,
                isAvailable: true,
                category: itemData.category,
                imageUrl: itemData.imageUrl
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                getMenuItems();
                resetItemData()
                setOpenPopup(false);
            })
        } else {
            axios.put(`${LOCAL_BASE_URL}/menu-items/${type.split('-')[1]}`, {
                name: itemData.name,
                description: itemData.description,
                price: itemData.price,
                calories: 100,
                weight: 10,
                isAvailable: true,
                category: itemData.category,
                imageUrl: itemData.imageUrl
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                getMenuItems();
                resetItemData()
                setOpenPopup(false);
            })
        }
        
    }, [itemData, token, setOpenPopup, getMenuItems, resetItemData, type])

    
  return (
    <div className={` ${openPopup ? 'block ' : 'hidden'} fixed z-50 top-0 left-0 w-full h-screen bg-black/70 flex justify-center items-center`}>
        <div className='w-[90%] md:w-2/3 lg:w-[450px] min-h-[200px] bg-white rounded-xl relative'>
        <button onClick={() => {setOpenPopup(false)}} className='absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </button>
        <h1 className='text-2xl text-center font-medium mt-4'>{type==="Create" ? "Create" : "Update"} Menu Item</h1>
            <form onSubmit={handleSubmit} onChange={handleForm} className="max-w-sm my-12 px-4 mx-auto text-center">
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" value={itemData.name} id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Title" required />
                </div>
                <div className="mb-5">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="description" value={itemData.description} id="description" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Description" required />
                </div>
                <div className="mb-5">
                    <label for="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 ">Image URL</label>
                    <input type="url" value={itemData.imageUrl} id="imageUrl" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Image URL" required />
                </div>
                <div className="mb-5">
                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Select a Category</label>
                    <select id="category" value={itemData.category} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a Category</option>
                        <option value="MAIN_COURSE">Main Course</option>
                        <option value="APPETIZER">Appetizer</option>
                        <option value="DESSERT">Dessert</option>
                        <option value="DRINK">Drink</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                    <input type="number" value={itemData.price} step="0.01" id="price" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter Price (in AZN)' required />
                </div>
               
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{type==="Create" ? "Create" : "Update"} Menu Item</button>
            </form>

        </div>
    </div>
  )
}

export default MenuItemCreate