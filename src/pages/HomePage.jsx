import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [menuItems, setMenuItems] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        axios.get('http://localhost:8080/api/menu-items')
            .then(response => {
                setMenuItems(response.data); 
                setLoading(false); 
            })
            .catch(err => {
                setError('Error fetching menu items');  
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Menu</h1>
                <p>Loading menu items...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Menu</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Menu</h1>
            {menuItems.length === 0 ? (
                <p>No menu items available</p>
            ) : (
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.price} USD</p>
                            {item.imageUrl && <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: 'auto' }} />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;
