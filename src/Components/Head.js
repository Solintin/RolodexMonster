import React from 'react';

class Head extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "Soolih",
            age : 22,
            isLogged : false 
        }
    }
    

    render(){
        let status = "";
        if (this.state.isLogged) {
            status += "In";
        } else {
            status += "Out";
        }

        return ( 
        <div>
            <h2> Hello Here, My Name is {this.state.username} and My age is {this.state.age} i think my age is correlating with my look! Currently Am Logged {status} </h2>
        </div>
        );

    }
}

export default Head;