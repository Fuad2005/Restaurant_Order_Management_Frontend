import React from 'react'
import Waiter from '../components/waiter/Waiter'
import { useNavigate } from 'react-router';

function WaiterPage() {

  const navigate = useNavigate();

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'WAITER') {
      navigate('/login');
      
    }
  }, [navigate]);

  return (
    <div className='mx-8'>
        <Waiter />
    </div>
  )
}

export default WaiterPage