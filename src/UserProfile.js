import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const fetchUser  = async () => {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
            setUser (response.data.results[0]);
        };
        fetchUser ();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="profile-image" />
            <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Location:</strong> {user.location.city}, {user.location.state}, {user.location.country}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Cell:</strong> {user.cell}</p>
        </div>
    );
};

export default UserProfile;