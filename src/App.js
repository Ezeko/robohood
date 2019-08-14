// import important and revelevant components here
import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './Search'


// Create class here because this is the parent component of the app
class App extends Component {
    //constructor as every componet has
    constructor(){
    super()
    // declare the states. the state are the dynamic variables of an app
    this.state ={
        robots: robots,
        SearchField: ''
    }}

    //instance  where the state variable is changed
     Searched = (event)=>{
            this.setState({SearchField:event.target.value});
            
            }
    
    
    // this is what is displayed on the app
    render(){ 
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());})      
     return(
        <div className="app">
            <h1>Robofriends</h1>
            <SearchBox SearchChange = {this.Searched} />
            <hr />
            <CardList robots = {filteredRobots} />
        </div>
        );
    }}


export default App;
