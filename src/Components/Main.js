 import React from 'react';
import TodoItem from './TodoItem';
import TodosData from './TodosData';
import ContactCard from './ContactCard';
import Joke from './Joke';
import SchMat from './SchoolMat';
import jokesData from './JokesData';
import SchoolMaterialAPI from './SchoolMaterialAPI';
import img1 from './images/bj2.PNG';
import img2 from './images/bj3.PNG';
import img3 from './images/bj4.PNG';
import Greeting from './Greeting';
import Head from './Head';


class Main extends React.Component {

    //METHODS TO HANDLE IMPORTED COMPONENTS IF REQUIRED

    constructor(){
        super();
        this.state = {
            todos : TodosData
        }

        this.handleChange = (id) => {

            const {todos}  = this.state;
            const todosLogic = todos.map(focus =>{
               
                if (focus.id === id) {

                    focus.Status = !focus.Status

                }

                return focus 
            });

            this.setState ({
                todos : todosLogic
                
            });
        }


    }


    render(){

        const date = new Date();
        const time = date.getHours();
        let timeOfDay;
        let timeNow = date.toLocaleTimeString();
    
        let dateString = date.toDateString();
        let styles = {};
        

        if (time < 12) {
            timeOfDay = "Morning";
            
        }
        else if (time >= 12 && time < 17) {
            timeOfDay = "Afternoon";
        }
        else {
            timeOfDay = "Evening";
            styles.color = "red";
        }

        //HANDLERS FOR IMPORTED COMPONENTS

        const jokesComponent = jokesData.map( (joke) => {
            return <Joke 
            key = {joke.id} 
            question = {joke.Question}
            answer = {joke.Answer}
            />
        });
        
        const MatComponent = SchoolMaterialAPI.map( (component) => {
           
            return <SchMat 
                key = {component.id}
                product={component}
            />
        });

        const TodoComp = this.state.todos.map( items => {
            return(
                <TodoItem 
                key = {items.id}
                item = {items}
                handleChange = {this.handleChange}
               
                />
            )

        });
       

        return (
        <div>
            <h2 style= {styles}>Hello, Today is {dateString} Good 
            { `${timeOfDay}`} the time is {timeNow} </h2>
            
            {TodoComp}

            <Greeting />
            <Head username= "Saalih"/>

                <ContactCard
                contact = {{
                    imgUrl : img3,
                    name : "Alley Soliu babatunde",
                    course : "Mechatronics Engineering",
                    gender : "Male"
                }}  
                />

                <ContactCard
                contact = {{
                    imgUrl : img1,
                    name : "Abdullahi Femi Adebayo",
                    course : "Electrical Engineering",
                    gender : "Male"
                }}  
                />

                <ContactCard
                contact = {{
                    imgUrl : img2,
                    name : "Aminat Adeola Yuusuf",
                    course : "MicroBiology",
                    gender : "Female"
                }}  
                />
                <ContactCard
                contact = {{
                    imgUrl : img3,
                    name : "Chiamka Akanji Blessing",
                    course : "Educationist",
                    gender : "Female"
                }}  
                />

                <ContactCard
                contact = {{
                    imgUrl : img2,
                    name : "Amdalah Adeola Rahma",
                    course : "Medicine",
                    gender : "Female"
                }}  
                />
                <ContactCard
                contact = {{
                    imgUrl : img3,
                    name : "Adb Awwal Akanji",
                    course : "Physicst",
                    gender : "Male"
                }}  
                />

                {jokesComponent}

                {MatComponent}
    
            </div>
        );
    }    
}

export default Main;