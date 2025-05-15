import React from 'react';
import { useNavigate } from 'react-router';


const HomePage = () => {

    const navigate = useNavigate();


    React.useEffect(() => {
        navigate('/menu');
    }, [navigate]);

    return (
        <div className='mx-8'>
            <h1>Home</h1>
            
        </div>
    )
};

export default HomePage;
