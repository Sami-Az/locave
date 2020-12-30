import React from 'react'
import UsersList from '../components/UsersList';

const UsersPage = () => {
    const USERS = [
        {
            id: 'dezdze2d43',
            name: 'Sam Luiz',
            image: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            places: 3
        },
    ];
    return (
        <div>
            <UsersList items={USERS} /> 
        </div>
    )
}

export default UsersPage;
