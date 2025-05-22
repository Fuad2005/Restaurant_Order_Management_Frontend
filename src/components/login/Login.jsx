import React from 'react'
import axios from 'axios';
import { LOCAL_BASE_URL } from '../../utils/variables';
import { useNavigate } from 'react-router';


function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${LOCAL_BASE_URL}/auth/login`, formData).then((res) => {
        const userData = {
            username: formData.username,
            fullName: res.data.fullName,
            token: res.data.token,
            role: res.data.role
        }
        localStorage.setItem('user', JSON.stringify(userData));
        if (res.data.role === 'WAITER') {
            navigate('/11d772dff79c4d7cbaff6e3fa491a478');
        } else if (res.data.role === 'KITCHEN') {
            navigate('/b86f6df847644f00aa82f285c2173e70');
        } else {
            navigate('/');
        }
    }).catch((err) => {
        console.log(err);
    });
    
    
  }



  return (
    <div className='min-h-[80vh] flex flex-col gap-7 justify-center items-center'>
        <h1 className='text-4xl font-semibold'>Login</h1>
        <form className="lg:w-1/3 md:w-1/2 sm:w-3/4 w-[96%] mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
            <input onChange={(e) => {setFormData({...formData, username: e.target.value})}} value={formData.username} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[98%] p-2.5 m-auto" placeholder="Your Username" required />
        </div>
        <div className="mb-5">
            <input onChange={(e) => {setFormData({...formData, password: e.target.value})}} value={formData.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[98%] p-2.5 m-auto" placeholder="Your Password" required />
        </div>        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>

    </div>

  )
}

export default Login