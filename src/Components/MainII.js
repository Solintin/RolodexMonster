import React from 'react';

class MainII extends React.Component{
    constructor(){
        super();

        //PAST STATES
        this.state = {
            count : 0,
            pos : 5,
            isLoading : false,
            isLoggedIn : false,
            search : {}
        }
        //LOGIC/METHOD HANDLING NEW  STATES 

        this.handleClick = () =>{
            const {count, pos} = this.state;
    
            let newCount = count + 1;
            let newPos= pos + 1;

        //LOGIC/METHOD SETTING NEW STATES

            this.setState ({    
                count : newCount,
                pos : newPos
            });
        }

        this.changeStatus = () => {
           const {isLoggedIn} = this.state;
           this.setState ({
            isLoggedIn :  !isLoggedIn 
        })
            

        }
    }
    
    componentDidMount(){
        const {search} = this.state;
       this.setState({
        isLoading : true
       });
       fetch("https://swapi.dev/api/people/1/")
       .then(resolve => resolve.json()).then(data => 
       
        this.setState({
            isLoading : false,
            search : data
            
            })
        );    
       

    }

    

    render(){
        let movieName = this.state.isLoading ? "Loading...." : this.state.search.films;
       
        return (
            <div>
                <center>
                    <p>{movieName}</p>
                    <h1>{this.state.count} </h1>
                    <button onClick = {this.handleClick}>CHANGE!</button>
                    <br/>
                    { this.state.isLoading ? <h2>Loading.....</h2> : <h2>Loaded Successfully</h2>  } 
                    
                     Guest Just {this.state.isLoggedIn ? <h2>Logged In</h2> : <h2>Logged Out</h2>  }
                    <button onClick = {() => this.changeStatus()}> {this.state.isLoggedIn ? <h2>Log Out</h2> : <h2>Log In</h2>} </button>

                </center>
            </div>

        );
    }
}

export default MainII;