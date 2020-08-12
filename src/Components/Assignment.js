import React from 'react';

class Assignment extends React.Component {

    constructor (props){
        super(props);
        this.state ={
            firstName : '',
            lastName : '',
            age : '',
            gender : '',
            Vegetarian : false,
            Kosher : false,
            Lactose : false,
            Malaria : true,
            Covid : false
        }
        
        this.handleChange = (event) => {
            const {name, value, type, checked} = event.target
            type === "checkbox" ? this.setState({[name] : checked}) : this.setState ({ [name] : value});
        }
       
    }


    render(){
       let space = `  `;

        return(
            <div>
                <form>
                    <label> First Name -
                        <input 
                        type= 'text' name='firstName' value={this.state.firstName} placeholder='First Name' onChange={this.handleChange}
                        />
                    </label>
                    <br/>

                    <label> Last Name -
                        <input 
                        type= 'text' name='lastName' value={this.state.lastName} placeholder='Last Name' onChange={this.handleChange}
                        />
                    </label>
                    <br/>

                    <label> Age  -
                        <input 
                        type= 'text' name='age' value={this.state.age} placeholder='Age' onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    
                    <label> Gender  - 
                        <input 
                        type= 'Radio' name='gender' value= 'Male' checked={this.state.gender === 'Male'} onChange={this.handleChange}
                        /> {space} Male
                        <input 
                        type= 'Radio' name='gender' value='Female' checked={this.state.gender === 'Female'} onChange={this.handleChange}
                        /> {space} FeMale
                    </label>
                    <br/>

                    <label> Dietary Restrictions  :
                        <br/> 
                        <input 
                        type= 'checkbox' name='Vegetarian' checked={this.state.Vegetarian } onChange={this.handleChange}
                        /> {space} Vegetarian<br/>
                        <input 
                        type= 'checkbox' name='Kosher'  checked={this.state.Kosher} onChange={this.handleChange}
                        />{space} Kosher<br/>
                        <input 
                        type= 'checkbox' name='Lactose'  checked={this.state.Lactose } onChange={this.handleChange}
                        />{space} Lasctose Free<br/>
                        <input 
                        type= 'checkbox' name='Malaria' checked={this.state.Malaria } onChange={this.handleChange}
                        />{space} Malaria/fever<br/>
                        <input 
                        type= 'checkbox' name='Covid' checked={this.state.Covid } onChange={this.handleChange}
                        />{space} Covid-19<br/>
                    
                    </label>
                    <br/>


                </form>





                <h3> First Name : {this.state.firstName}</h3>
                <h3> Last Name : {this.state.lastName}</h3>
                <h3> Age : {this.state.age}</h3>
                <h3> Gender : {this.state.gender}</h3>
                <h3> Dietary Restrictions : <br/>
                     <p style={{ color : this.state.Vegetarian ? "green" : "pink"} }> Vegetarian : {this.state.Vegetarian ? "True" : "False"} </p>
                     <p style={{ color : this.state.Kosher ? "green" : "pink"} }> Kosher : {this.state.Kosher ? "True" : "False"} </p>
                     <p style={{ color : this.state.Lactose ? "green" : "pink"} }> Lasctose-Free : {this.state.Lactose ? "True" : "False"} </p>
                     <p style={{ color : this.state.Malaria ? "green" : "pink"} }> Malaria/Fever : {this.state.Malaria ? "True" : "False"} </p>
                     <p style={{ color : this.state.Covid ? "green" : "pink"} }> Covid : {this.state.Covid ? "True" : "False"}  </p>
                </h3>

            </div>

        )


}
}
export default Assignment;