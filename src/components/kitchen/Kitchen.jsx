import React from 'react'
import KitchenOrder from './KitchenOrder'
import axios from 'axios'
import { LOCAL_BASE_URL } from '../../utils/variables'

function Kitchen({token}) {

  const [orders, setOrders] = React.useState([]);
  const [statuses, setStatuses] = React.useState(['NEW', 'IN_PREPARATION', 'READY']);


   const refreshOrders = React.useCallback(() => {
    axios.get(`${LOCAL_BASE_URL}/orders`).then((res) => {
        const filteredOrders = res.data.filter(order => statuses.includes(order.status));
        const sortedOrders = filteredOrders.sort((a, b) => {
          return a.orderId - b.orderId
        })
        setOrders(sortedOrders);


        console.log(res.data)
    }).catch(err => {
      console.log(err)
    });
  }, [statuses]);

  React.useEffect(() => {
      refreshOrders()
  }, [refreshOrders])

 


  return (
    <>
        <h1 className='text-center text-3xl font-bold'>Orders</h1>
      {orders.length === 0 && <h1 className='flex items-center justify-center text-5xl font-bold text-gray-600 h-[70vh] w-full'>No orders <br /> <br /> Sit Back and Relax</h1>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {orders.map((order) => <KitchenOrder refreshOrders={refreshOrders} setStatuses={setStatuses} token={token} key={order.id} order={order} />)}
        </div>
    </>
  )
}

export default Kitchen