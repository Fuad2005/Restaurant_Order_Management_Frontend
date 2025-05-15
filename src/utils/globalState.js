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
        // {
        //     name: 'Burger',
        //     price: 2.50,
        //     category: 'Fast Food'
        // },
        {
            name: 'Burger',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Pizza',
            price: 12.50,
            category: 'Fast Food'
        },
        {
            name: 'Fries',
            price: 1.50,
            category: 'Fast Food'
        },
        {
            name: 'Kabab',
            price: 9.80,
            category: 'Meat'
        },
        {
            name: 'Salad',
            price: 3.50,
            category: 'Healthy'
        },
        {
            name: 'Water',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Coca Cola',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Fanta',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Sprite',
            price: 1.20,
            category: 'Drink'
        }
    ],
    cartTotalPrice: 0
});


export { setGlobalState, useGlobalState };