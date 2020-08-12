import React from 'react';

//WHAT IS RENDERED AS DISPLAY ON THE WEBPAGE
class TodoItem extends React.Component {


    render(){

        let stylesComp = {
            color : "green"

        }
        let stylesNotComp = {
            color : "pink"
        }
      

        return  (
        <div className='placeholder'>
            
            <input  type="checkbox" 
            checked={this.props.item.Status} 
            onChange = {() => this.props.handleChange(this.props.item.id)} 
            />
            <label> {this.props.item.Todo} </label> -  {this.props.item.Status ? <h4 style = {stylesComp}> Task Completed Successfully</h4> : <h4 style = {stylesNotComp}>Task not yet executed</h4> } 
            
        </div>   
        );
    }
}
  

export default TodoItem;

  