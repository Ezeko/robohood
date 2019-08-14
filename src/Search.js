import React from 'react';

const SearchBox =({ SearchChange}) =>{
    return(
        <input type="search" id="search" onChange={SearchChange} placeholder=" Search Robots..." />
    );
}

export default SearchBox;