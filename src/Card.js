import React from 'react';

const Card = ({id, name, email})=>{
    return(
        <div>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Card;