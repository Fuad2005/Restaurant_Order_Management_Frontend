import React from 'react'
import MenuItem from './MenuItem'
import Cart from '../cart/Cart';
import { setGlobalState, useGlobalState } from '../../utils/globalState';
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';

function Menu({name='Menu', isTable=false}) {

    const [ menuItems ] = useGlobalState('menuItems');
    const [ cartItems ] = useGlobalState('cartItems');
    
    

    React.useEffect(() => {
        axios.get(`${LOCAL_BASE_URL}/menu-items`).then((res) => {
            setGlobalState("menuItems", res.data);
        });
    }, [])





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

        {isTable && <Cart removeItem={removeItem} tableId={isTable} /> }
        <h1 className='text-4xl font-semibold text-center mt-4'>{name}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        
        {menuItems?.map((item, index) => (
            <MenuItem key={index} addItem={addItem} name={item.name} price={item.price} description={item.description} category={item.category} isTable={isTable} imgUrl={item.imageUrl} />
        ))}
        
        </div>
    </>
  )
}

export default Menu