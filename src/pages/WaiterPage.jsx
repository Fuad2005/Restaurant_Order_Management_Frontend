import React from 'react'
import Waiter from '../components/waiter/Waiter'
import { useNavigate } from 'react-router';

function WaiterPage() {

  const navigate = useNavigate();
  const [token, setToken] = React.useState('');
  

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'WAITER') {
      navigate('/login');
      
    } else {
      setToken(userData.token);
    }
  }, [navigate]);

  return (
    <div className='mx-8'>
        <Waiter token={token} />
    </div>
  )
}

export default WaiterPage