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
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 2.50,
            category: 'Fast Food'
        },
        {
            name: 'Pizza',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 12.50,
            category: 'Fast Food'
        },
        {
            name: 'Fries',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 1.50,
            category: 'Fast Food'
        },
        {
            name: 'jfsoadio saiji jaosdihfoasi oasdjf',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 9.80,
            category: 'Other'
        },
        {
            name: 'Salad',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 3.50,
            category: 'Healthy'
        },
        {
            name: 'Water',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Coca Cola',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Fanta',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 1.20,
            category: 'Drink'
        },
        {
            name: 'Sprite',
            description: 'udh iasudhfo iasudhf aosiuhdfaos iudhfaosi ud',
            price: 1.20,
            category: 'Drink'
        }
    ],
    cartTotalPrice: 0
});


export { setGlobalState, useGlobalState };