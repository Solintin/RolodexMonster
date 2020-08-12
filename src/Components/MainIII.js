import React from 'react';

class MainIII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            isChecked : false,  

            gender : "",
            subjectFav : ""
        }
        this.handleChange = (event) => {
            const { name, value, checked, type} = event.target

         type == "checkbox" ? this.setState ({[name] : checked}) : this.setState ({[name] : value})
        }

    }

    // 

    render(){
        



        return (
            <div>
                <center >               
                     <input type="text" name='firstName' value={this.state.firstName} placeholder='firstName' onChange={this.handleChange} />
                     <br/>
                     <input type="text" name='lastName' value={this.state.lastName} placeholder='lastName' onChange={this.handleChange} />
                    <h3>{this.state.firstName}</h3>
                    <h3>{this.state.lastName}</h3>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isChecked"
                            checked = {this.state.isChecked} 
                            onChange = {this.handleChange} />
                            - TodayIsFriday  
                    </label>
                    <label>
                    <input 
                            type="radio" 
                            name="gender"
                            value='male'
                            checked = {this.state.gender === 'male'} 
                            onChange = {this.handleChange}
                    /> Male</label>

                    <label>
                    <input 
                            type="radio" 
                            name="gender"
                            value='female'
                            checked = {this.state.gender === "female"} 
                            onChange = {this.handleChange} 
                    /> Female</label>
                    <h4>I am  {this.state.gender}</h4>

                    <select value = {this.state.subjectFav}
                            onChange={this.handleChange}
                            name="subjectFav">
                        <option >------ CHOOSE  FAVOURITE SUBJECT-------</option>
                        <option value = "Mathematics">Mathematics</option>
                        <option value = "English">English</option>
                        <option value = "Physics">Physics</option>
                        <option value = "Biology">Biology</option>
                    </select>
                    <br/>
                    <label>My Favourite subject is {this.state.subjectFav} </label>


                </center>

            </div>
        );
    }


}

export default MainIII;