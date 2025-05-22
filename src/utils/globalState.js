import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    cartItems: [
        // {
        //     name: 'Burger',
        //     price: 2.50,
        //     amount: 1
        // }
    ],
    menuItems: [

        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Food Item',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: 2.50,
            category: 'Fast Food'
        }
        
    ],
    cartTotalPrice: 0
});


export { setGlobalState, useGlobalState };