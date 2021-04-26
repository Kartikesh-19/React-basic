
import React, { Component } from 'react'
import { connect } from 'react-redux';

 class PostForm extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        const name=this.getName.value;
        const message=this.getMessage.value;
        const data={
            id:new Date(),
            name,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value='';
        this.getMessage.value='';

    }
    render() {
        return (
            <div>
            <h1>Create Post</h1>
            <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Enter the name" required ref={(input)=>this.getName=input} /><br/><br/>
            <textarea type='text' placeholder="Enter post" required ref={(input)=>this.getMessage=input}/><br/><br/> 
            <button type="submit">Post</button>
            </form>
                
            </div>
        )
    }
}
export default connect() (PostForm);