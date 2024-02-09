// src/pages/Details.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchUsers } from "../api/users";
import "../App.css";

function Details() {
    const { userId } = useParams();
    const navigate = useNavigate();
    
    const { data: usersData, isLoading, error } = useQuery("users", fetchUsers);

    if (isLoading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error.message}</div>;

    const user = usersData && Array.isArray(usersData.users) ? usersData.users.find(user => user._id === userId) : null;

    if (!user) return <div className="container">User not found</div>;
    return (
        <div className="details">
            <div className="card">
                <h1>User Details</h1>
                {user.profileImage && <img src={user.profileImage} alt="Profile" />}
                <p>Name: {user.name}</p>
                {user.gender && <p>Gender: {user.gender}</p>}
                {user.headline && <p>Headline: {user.headline}</p>}
                {user.schoolName && <p>School: {user.schoolName}</p>}
                {user.status !== undefined && <p>Status: {user.status ? 'True' : 'False'}</p>}
                <p>Interest: {user.interest.join(', ')}</p>
                <button className="goBackBtn" onClick={() => navigate(-1)}>Retour</button>
            </div>
        </div>
    );
}

export default Details;