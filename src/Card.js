import React from 'react';
import './Card.css';

const Card = ({id, name, email})=>{
    /*another way to write this is by doing destructuring
    const Card =({props}){
        const {id, name, email} = props;
        return(   
            <div className='main'>
            <div className='container'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <p>{name}</p>
            <p>{email}</p>
            </div>
        </div>);
    }
    */
    return(
        <div className='main'>
            <div className='container'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <p>{name}</p>
            <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
