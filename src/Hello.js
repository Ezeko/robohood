import React from 'react';
import  './Hello.css';

const Hello = (props) => {

        return (
            <div> <h1>Hello World</h1>
            <p>Welcome to my first react page</p>
            <p id='greet'>{props.greeting}</p>
            </div>
        );
    
}
export default Hello;