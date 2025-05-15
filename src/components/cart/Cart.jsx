import React from 'react'
import CartItem from './CartItem'

function Cart({cartItems, removeItem}) {


    const cartRef = React.useRef();




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
    


  return (
    <>
        

        <div ref={cartRef} className=' transition-all fixed bottom-[-50vh] right-5 rounded-lg bg-white shadow-xl h-1/2 w-[300px] md:w-[400px] z-10'>
            <button onClick={toggleCart} className=' text-white absolute top-[-80px] w-full rounded-lg bg-blue-400 hover:bg-blue-500 transition-all text-xl font-semibold py-5 z-40'>
                Total: 24.56 AZN
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
                <span className='font-semibold text-lg'>Total: 82.41 AZN</span>
                <button className='text-white bg-blue-400 hover:bg-blue-500 transition-all text-lg py-2 px-4 rounded-lg'>Order</button>
            </div>
        </div>
    
    </>
  )
}

export default Cart