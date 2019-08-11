import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const CardArray = robots.map((user, i)=>{
        return (
    <div>
    <Card id={robots[i].id} name ={robots[i].name} email = {robots[i].email} />
    </div>)
     });
        
    return(
        <div>
      {CardArray}
      </div>);
}

export default CardList;