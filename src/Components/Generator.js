import React, {Component} from 'react';

class Generator extends React.Component{

    constructor(){
        super(); 
        this.state = {
            TopText : "",
            BottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allmemeImgs : []
        }

        this.handleChange = (event) => {
            const {name, value} = event.change
            this.setState({
                [name] : value
            })
       }

    }
    componentDidMount(){
        
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()).then(resolve => {
            const {memes} = resolve.data;
            console.log(memes);
            this.setState({
                allmemeImgs : memes
            })
        });
   
    }


   
       render()
       {

        



        return (
            <div>
                <form>
                    <label>
                        
                        <input 
                        type='text' name="TopText" value={this.state.TopText} placeholder="TopText" onChange={this.handleChange}
                    />
                    </label>
                    <label>
                        
                        <input 
                        type='text' name="BottomText" value={this.state.BottomText} placeholder="BottomText" onChange={this.handleChange}
                    />
                    </label>
                    <button>Gen</button>
                </form>
                    <div>
                        <img src={this.state.randomImg} />
                        <h2> {this.state.TopText}</h2>
                        <h2> {this.state.BottomText}</h2>
                    </div>
            </div>
        )   
    }
}

export default Generator;