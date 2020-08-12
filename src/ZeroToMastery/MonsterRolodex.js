import React, { Component } from 'react';
import {CardList} from './Compont/CardList'; 
import {Users} from './Compont/Users.json'
import { SearchBox } from './Compont/SearchBox'

class Monster extends Component {
    constructor(){
        super();
        this.state = {
            monsters : Users,
            searchField : ""
        }
    }
    // componentDidMount(){
    //     fetch('file:///C:/Users/Dell Latiude E5540/Desktop/WEB_DESIGN/JAVASCRIPT COURSE/reactApp/my-app/src/Users.html')
    //     .then(Response => Response.json())
    //     .then(users => {
    //         this.setState({monsters : users})
    //     });
    // }

    render(){
        // const { monsters} = this.state
        // const returnMonster = monsters.map(monster => {
        //     return (
        //         <h1 key={monster.id}>
        //             {monster.name}
        //         </h1>
        //     )
        // })
        const { searchField , monsters} = this.state;
        
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()) )

        const handleChange = (e) => {
            this.setState({searchField : e.target.value})    

        }
                return (
            <div className='App'>
              
                <SearchBox handleChange = {handleChange} />
                <br/>
                <br/>
                <CardList 
                    monsterObj = {filteredMonsters}
                />
                    
            

            </div>

        )
    }
} 





export default Monster;