import React from 'react'
import MenuItem from './MenuItem'
import Cart from '../cart/Cart';
import { setGlobalState, useGlobalState } from '../../utils/globalState';
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';
import MenuItemCreate from './MenuItemCreate';

function Menu({name='Menu', isTable=false}) {

    const [ menuItems ] = useGlobalState('menuItems');
    const [ cartItems ] = useGlobalState('cartItems');
    const [ token, setToken ] = React.useState(null);

    const [ openPopup, setOpenPopup ] = React.useState(false);
    const [type, setType] = React.useState('Create');

    const [categoryFilter, setCategoryFilter] = React.useState('');
    
    
    

    const getMenuItems = React.useCallback(() => {
        axios.get(`${LOCAL_BASE_URL}/menu-items`).then((res) => {
            const sortedData = res.data.sort((a, b) => {
                return a.id - b.id
            })
            setGlobalState("menuItems", sortedData);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    const getFilteredMenuItems = React.useCallback(() => {
        axios.get(`${LOCAL_BASE_URL}/menu-items/category/${categoryFilter.toLowerCase()}`).then((res) => {
            const sortedData = res.data.sort((a, b) => {
                return a.id - b.id
            })
            setGlobalState("menuItems", sortedData);
        }).catch((err) => {
            console.log(err);
        });
    }, [categoryFilter]);



    React.useEffect(() => {
        if (categoryFilter !== '') {
            getFilteredMenuItems();
        } else {
            getMenuItems();
        }
    }, [getMenuItems, categoryFilter, getFilteredMenuItems]);


    React.useEffect(() => {}, [openPopup])



    React.useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData || userData.role !== 'MANAGER') {

        } else {
          setToken(userData.token);
        }
      }, []);

      




    const addItem = React.useCallback((item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.name === item);


        if (existingItem) {
            setGlobalState("cartItems", cartItems.map((cartItem) => {
                if (cartItem.name === item) {
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem;
            }));
        } else {
            setGlobalState("cartItems", [...cartItems, {id: menuItems.find((menuItem) => menuItem.name === item).id,name: item, amount: 1, price: menuItems.find((menuItem) => menuItem.name === item).price}]);
        }
        

    }, [cartItems, menuItems]);

    const removeItem = React.useCallback((item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.name === item);

        if (existingItem.amount === 1) {
            setGlobalState("cartItems", cartItems.filter((cartItem) => cartItem.name !== item));
        } else {
            setGlobalState("cartItems", cartItems.map((cartItem) => {
                if (cartItem.name === item) {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            }));
        }


    }, [cartItems ]);


  return (
    <>
        {(token && !isTable) && <MenuItemCreate type={type} token={token} openPopup={openPopup} setOpenPopup={setOpenPopup} getMenuItems={getMenuItems} /> }

        {(isTable) && <Cart removeItem={removeItem} tableId={isTable} /> }
        <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center pt-4 pb-2'>
            <div className='basis-1 md:basis-1/3 text-center'>
                {(token && !isTable) && <button onClick={() => {setType('Create'); setOpenPopup(true)}} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Item</button>}
            </div>
            <h1 className='basis-1 md:basis-1/3 text-4xl font-semibold text-center'>{name}</h1>
            <div className='basis-1 md:basis-1/3 flex justify-center'>
                <select id="category" value={categoryFilter} onChange={(e) => {setCategoryFilter(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option value='' selected>All categories</option>
                        <option value="MAIN_COURSE">Main Course</option>
                        <option value="APPETIZER">Appetizer</option>
                        <option value="DESSERT">Dessert</option>
                        <option value="DRINK">Drink</option>
                </select>
            </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        
        {menuItems?.map((item, index) => (
            <MenuItem key={index} token={token} getMenuItems={getMenuItems} addItem={addItem} itemId={item.id} name={item.name} price={item.price} description={item.description} category={item.category} setType={setType} setOpenPopup={setOpenPopup} isTable={isTable} imgUrl={item.imageUrl} />
        ))}
        
        </div>
    </>
  )
}

export default Menu