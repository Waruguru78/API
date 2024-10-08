import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userlist.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); 

  return (
    <div className="user-list-container">
      <h2>List of Users</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
