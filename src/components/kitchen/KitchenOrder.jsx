import React from 'react'
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';

function KitchenOrder({order, token, refreshOrders}) {

  const [orderStatuses, setOrderStatuses] = React.useState([
    'NEW',
    'IN_PREPARATION',
    'READY',

  ]);

  const [orderItems, setOrderItems] = React.useState([]);




  React.useEffect(() => {
    setOrderItems(order.items);
  }, [order])



  const handleStatusChange = React.useCallback(() => {
    const currStatus = orderStatuses.indexOf(order.status);

    const nextStatusIndex = currStatus + 1;
    if (nextStatusIndex >= orderStatuses.length) return;

    axios.put(`${LOCAL_BASE_URL}/orders/${order.orderId}`, {
      status: orderStatuses[nextStatusIndex]
    }, {headers: {
      "Authorization": `Bearer ${token}`
    }}).then(res => {
      console.log(res);
      refreshOrders();
      
    }).catch(err => {
      console.log(err);
      
    })
  }, [order, orderStatuses, token, refreshOrders]);


  return (
    <div className={`shadow-xl rounded-lg hover:shadow-2xl transition-all h-[400px]  ${order.status==="NEW" ? 'bg-red-50' : order.status==="IN_PREPARATION" ? 'bg-blue-50' : order.status==="READY" ? 'bg-green-50' : null}`}>
      <h1 className='border-b border-white text-center text-xl font-medium py-2 mb-2'>Order {order.orderId}</h1>
      <div className='flex justify-between py-2 px-6 text-center'>
      <span className='basis-1/3'>Food</span>
      <span className='basis-1/3'>Amount</span>
      <span className='basis-1/3'>Completed</span>
      </div>
      <div className='flex flex-col gap-2 rounded-lg h-[230px] overflow-scroll text-center'>


        {orderItems.map((item) => (
            <div className='flex gap-4 justify-between rounded-lg p-4 border border-white m-2'>
              <h3 className='truncate basis-1/3'>{item.menuItemName}.</h3>
              <span className='basis-1/3'>{item.quantity}</span>
              <div className='basis-1/3 '>
                <input className='m-auto p-3 transform scale-150' type="checkbox" />
              </div>
            </div>

        ))}



          



      </div>

      <div>
        <button onClick={handleStatusChange} className={`text-white text-xl py-2 px-4 m-3 rounded-xl w-[calc(100%-24px)] h-[50px] ${order.status==="NEW" ? 'bg-red-400' : order.status==="IN_PREPARATION" ? 'bg-blue-400' : order.status==="READY" ? 'bg-green-400' : null}`}>{order.status==="NEW" ? 'Take Order' : order.status==="IN_PREPARATION" ? 'Complete Order' : order.status==="READY" ? 'Deliver Order' : null}</button>
      </div>

    </div>
  )
}

export default KitchenOrder