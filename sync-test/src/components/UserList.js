// src/components/UsersList.js
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchUsers } from "../api/users";

function UsersList() {
    const { data, isLoading, error } = useQuery("users", fetchUsers);

    if (isLoading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error.message}</div>;

    if (!data || !Array.isArray(data.users))
        return <div className="container">No data</div>;

    return (
        <ul className="user-list">
            {data.users.map((user) => (
                <Link to={`/details/${user._id}`} key={user._id} style={{ textDecoration: 'none' }}>
                    <li className="user-item">
                        {user.name}
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default UsersList;
