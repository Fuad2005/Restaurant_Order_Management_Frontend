import React from 'react'

function KitchenOrder() {


  const [orderStatus, setOrderStatus] = React.useState(0); // 0 = notStarted, 1 = inProgress, 2 = completed
 
  


  const handleStatusChange = () => {
    if (orderStatus === 0) {
      setOrderStatus(1);
    } else if (orderStatus === 1) {
      setOrderStatus(2);
    }
  };


  return (
    <div className='shadow-xl rounded-lg hover:shadow-2xl transition-all h-[400px] '>
      <h1 className='border-b text-center text-xl font-medium py-2 mb-2'>Order 1</h1>
      <div className='flex justify-between py-2 px-6 text-center'>
      <span className='basis-1/3'>Food</span>
      <span className='basis-1/3'>Amount</span>
      <span className='basis-1/3'>Completed</span>
      </div>
      <div className='flex flex-col gap-2 rounded-lg h-[230px] overflow-scroll text-center'>

          <div className='flex gap-4 justify-between rounded-lg p-4 border m-2'>
            <h3 className='truncate basis-1/3'>Lorem ipsum dolor sit amet.</h3>
            <span className='basis-1/3'>3</span>
            <div className='basis-1/3 '>
              <input className='m-auto p-3 transform scale-150' type="checkbox" />
            </div>
          </div>

          <div className='flex gap-4 justify-between rounded-lg p-4 border m-2'>
            <h3 className='truncate basis-1/3'>Lorem ipsum dolor sit amet.</h3>
            <span className='basis-1/3'>3</span>
            <div className='basis-1/3 '>
              <input className='m-auto p-3 transform scale-150' type="checkbox" />
            </div>
          </div>

          <div className='flex gap-4 justify-between rounded-lg p-4 border m-2'>
            <h3 className='truncate basis-1/3'>Lorem ipsum dolor sit amet.</h3>
            <span className='basis-1/3'>3</span>
            <div className='basis-1/3 '>
              <input className='m-auto p-3 transform scale-150' type="checkbox" />
            </div>
          </div>

          <div className='flex gap-4 justify-between rounded-lg p-4 border m-2'>
            <h3 className='truncate basis-1/3'>Lorem ipsum dolor sit amet.</h3>
            <span className='basis-1/3'>3</span>
            <div className='basis-1/3 '>
              <input className='m-auto p-3 transform scale-150' type="checkbox" />
            </div>
          </div>

          



      </div>

      <div>
        <button onClick={handleStatusChange} className={`text-white text-xl py-2 px-4 m-3 rounded-xl w-[calc(100%-24px)] h-[50px] ${orderStatus===0 ? 'bg-red-400' : orderStatus===1 ? 'bg-blue-400' : 'bg-green-400'}`}>{orderStatus===0 ? 'Take Order' : orderStatus===1 ? 'Complete Order' : 'Order Completed'}</button>
      </div>

    </div>
  )
}

export default KitchenOrder