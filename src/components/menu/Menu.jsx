import React from 'react'
import MenuItem from './MenuItem'
import Cart from '../cart/Cart';
import { setGlobalState, useGlobalState } from '../../utils/globalState';

function Menu() {

    const [menuItems] = useGlobalState('menuItems');
    
    

    const [cartItems, setCartItems] = React.useState([
        // {
        //     name: 'Burger',
        //     price: 2.50,
        //     amount: 1
        // }
    ]);


    const addItem = React.useCallback((item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.name === item);


        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.name === item) {
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, {name: item, amount: 1, price: menuItems.find((menuItem) => menuItem.name === item).price}]);
        }
        

    }, [cartItems, menuItems]);

    const removeItem = React.useCallback((item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.name === item);

        if (existingItem.amount === 1) {
            const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item);
            setCartItems(updatedCartItems);
        } else {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.name === item) {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
        }
    }, [cartItems]);


  return (
    <>
        <Cart cartItems={cartItems} removeItem={removeItem} />
        <h1 className='text-4xl font-semibold text-center mt-4'>Menu</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        
        {menuItems?.map((item, index) => (
            <MenuItem key={index} addItem={addItem} name={item.name} price={item.price}/>
        ))}
        
        </div>
    </>
  )
}

export default Menu