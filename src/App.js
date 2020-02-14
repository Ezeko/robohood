// import important and revelevant components here
import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './Search';
import Scroll from './Scroll';


// Create class here because this is the parent component of the app
class App extends Component {
    //constructor as every componet has
    constructor(){
    super()
    // declare the states. the state are the dynamic variables of an app
    // the state of the app is empty at the start of the app
    this.state ={
        robots: [],
        SearchField: ''
    }}

    //works after the app has been loaded first
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => response.json())
            
        .then(users => this.setState({robots: users}));
    }

    //instance  where the state variable is changed
     Searched = (event)=>{
            this.setState({SearchField:event.target.value});
            
            }
    
    
    // this is what is displayed on the app
    render(){ 
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());}) 
                  
    /*if (this.state.robots.length ===0){
                return(<h1 className="loading">loading...</h1>);
               }
    else{   */  
        return(
         //if still loading  
            <div className="app">
            <h1>Robofriends</h1>
            <SearchBox SearchChange = {this.Searched} />
            <hr />
            <Scroll>
            <CardList robots = {filteredRobots} />
            </Scroll>
            </div>

        );
}}/*}*/


export default App;
