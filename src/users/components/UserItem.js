import React from 'react';
import Avatar from '../../shared/components/Avatar';
import { Link } from 'react-router-dom';
import './UserItem.css';

const UserItem = (props) => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name}/>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2> 
                        <h3>{props.placesCount} {props.placesCount === 1 ? 'place' : 'places'}</h3>  
                    </div>
                </Link>
            </div> 
        </li>
    )
}

export default UserItem;
