// src/pages/Home.js
import React from 'react';
import UsersList from '../components/UserList';
import '../App.css';

function Home() {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <UsersList />
    </div>
  );
}

export default Home;
