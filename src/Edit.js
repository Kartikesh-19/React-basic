import React, { Component } from 'react'
import {connect} from 'react-redux';

 export class Edit extends Component {
    handleEdit=(e)=>{
        e.preventDefault();
        const newName=this.getName.value;
        const NewMessage=this.getMessage.value;
        const data={
            newName,
            NewMessage
        }
        this.props.dispatch({type:'UPDATE',id:this.props.post.id,data:data})

    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Enter the name" required ref={(input)=>this.gettitle=input} defaultValue={this.props.post.title} /><br/><br/>
            <textarea type='text' placeholder="Enter post" required ref={(input)=>this.getMessage=input} defaultValue={this.props.post.message}/><br/><br/> 
            <button type="submit">Update</button>
            </form>
                
                
            </div>
        )
    }
    
}
export default connect() (Edit);
