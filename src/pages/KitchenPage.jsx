import React from 'react'
import Kitchen from '../components/kitchen/Kitchen'
import { useNavigate } from 'react-router';

function KitchenPage() {

  const navigate = useNavigate();
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'KITCHEN') {
      navigate('/login');
    } else {
      setToken(userData.token);
    }
  }, [navigate]);
  return (
    <div className='mx-8'>
      <Kitchen token={token}/>
    </div>
  )
}

export default KitchenPage