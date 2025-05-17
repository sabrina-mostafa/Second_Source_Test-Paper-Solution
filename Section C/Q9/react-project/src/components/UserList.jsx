import React from 'react'
import { useEffect, useState } from "react";
import "./UserList.css";


const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading users...</p>;
    }



    return (
        <div className="user-list">
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="user-item">
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UserList
