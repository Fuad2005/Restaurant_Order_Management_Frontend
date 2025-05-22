import React from 'react'
import KitchenOrder from './KitchenOrder'
import axios from 'axios'
import { LOCAL_BASE_URL } from '../../utils/variables'

function Kitchen({token}) {

  const [orders, setOrders] = React.useState([]);


   const refreshOrders = React.useCallback(() => {
    axios.get(`${LOCAL_BASE_URL}/orders`).then((res) => {
        setOrders(res.data);
        console.log(res.data)
    }).catch(err => {
      console.log(err)
    });
  }, []);

  React.useEffect(() => {
    refreshOrders()
  }, [refreshOrders])

 


  return (
    <>
        <h1 className='text-center text-3xl font-bold'>Orders</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {orders.map((order) => <KitchenOrder refreshOrders={refreshOrders} token={token} key={order.id} order={order} />)}
        </div>
    </>
  )
}

export default Kitchen