import React from 'react';

class  Joke extends React.Component {

    render(){
        let styles = {};
        styles.color = "greenyellow";
        let sty = {};
        sty.color = "green";
    

        return (
            
            <div>
                <h3 style={{ display : this.props.question ? "block" : "none"}} > <span style = {{color : "red", fontSize : 30 }}>
                    Question</span> : {this.props.question}  </h3>
                <h3  > <span style = {sty}>
                    Answer</span> : {this.props.answer}  </h3>
                <hr/>

            </div>
            
        );
    }
  
  
}
export default Joke; 