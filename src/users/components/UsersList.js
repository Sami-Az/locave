import React from 'react'
import UserItem from './UserItem';

const UsersList = (props) => {
    if (props.items.length === 0) {
        return <div>No Users found.</div>
    }
    return (
        <ul className="users-list">
           {props.items.map(user => (
               <UserItem 
                key={user.id}
                id={user.id}
                name={user.name}
                image={user.image}
                placesCount={user.places}
               />
           ))} 
        </ul>
    )
}

export default UsersList;
