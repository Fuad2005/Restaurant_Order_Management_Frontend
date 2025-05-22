import React from 'react'
import CartItem from './CartItem'
import { useGlobalState, setGlobalState } from '../../utils/globalState';
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';

function Cart({removeItem, tableId}) {


    const cartRef = React.useRef();
    const [ cartTotalPrice ] = useGlobalState('cartTotalPrice')

    const [ cartItems ] = useGlobalState('cartItems');



    React.useEffect(() => {
        let sum = 0;
        cartItems.forEach((cartItem) => {
          sum += cartItem.price * cartItem.amount;
        });

        setGlobalState("cartTotalPrice", sum.toFixed(2));
      }, [cartItems]);

    const handleWheel = (e) => {
        e.stopPropagation();
      };

    const toggleCart = React.useCallback(() => {

        if (cartRef.current.classList.contains('bottom-[-50vh]')) {
            cartRef.current.classList.remove('bottom-[-50vh]')
            cartRef.current.classList.add('bottom-[20px]')
        } else {
            cartRef.current.classList.remove('bottom-[20px]')
            cartRef.current.classList.add('bottom-[-50vh]')
        }
    }, [])


    const handleOrder = React.useCallback(() => {
        let orderData = {
            tableId: tableId,
            items: [],
            status: "NEW"
        }

        for (let i = 0; i < cartItems.length; i++) {
            orderData.items.push({
                menuItemId: cartItems[i].id,
                quantity: cartItems[i].amount
            })
        }

        axios.post(`${LOCAL_BASE_URL}/orders`, orderData).then((res) => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
        }).catch((err) => {
            console.log(err);
        })
        
    }, [cartItems, tableId])


    


  return (
    <>
        

        <div ref={cartRef} className=' transition-all fixed bottom-[-50vh] right-5 rounded-lg bg-white shadow-xl h-1/2 w-[300px] md:w-[400px] z-10'>
            <button onClick={toggleCart} className=' text-white absolute top-[-80px] w-full rounded-lg bg-blue-400 hover:bg-blue-500 transition-all text-xl font-semibold py-5 z-40'>
                Total: {cartTotalPrice} AZN
            </button>
            <div className='flex justify-between items-center px-10 py-3 '>
                <span>Item</span>
                <span>Amount</span>
                <span>Delete</span>
            </div>
            <hr className='mb-4' />
            <div onWheel={handleWheel} className='overflow-scroll flex flex-col gap-3 h-[calc(90%-100px)]'>
                {cartItems.map((item, index) => <CartItem key={index} name={item.name} amount={item.amount} price={item.price} removeItem={removeItem}/>)}
                
            </div>
                    <hr />
            <div className='flex justify-around items-center h-[70px]'>
                <span className='font-semibold text-lg'>Total: {cartTotalPrice} AZN</span>
                <button onClick={handleOrder} className='text-white bg-blue-400 hover:bg-blue-500 transition-all text-lg py-2 px-4 rounded-lg'>Order</button>
            </div>
        </div>
    
    </>
  )
}

export default Cart