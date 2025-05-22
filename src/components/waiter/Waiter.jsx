import React from 'react'
import WaiterOrder from './WaiterOrder'
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';

function Waiter({token}) {


    const [orders, setOrders] = React.useState([]);
      const [statuses, setStatuses] = React.useState(['READY', 'DELIVERED', 'CLOSED']);
    


   const refreshOrders = React.useCallback(() => {
    axios.get(`${LOCAL_BASE_URL}/orders`).then((res) => {
        const filteredOrders = res.data.filter(order => statuses.includes(order.status));
        setOrders(filteredOrders);
        console.log(res.data)
    }).catch(err => {
      console.log(err)
    });
  }, [statuses]);

  React.useEffect(() => {
    refreshOrders()
  }, [refreshOrders])

  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Waiter Orders</h1>
      {orders.length === 0 && <h1 className='flex items-center justify-center text-5xl text-center font-bold text-gray-600 h-[70vh] w-full'>No orders <br /> <br /> Sit Back and Relax</h1>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
          {orders.map((order) => <WaiterOrder refreshOrders={refreshOrders} token={token} key={order.id} order={order} />)}
        </div>
    </div>
  )
}

export default Waiter