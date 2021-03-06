import React, { Component } from 'react'
import {connect} from'react-redux'
import Post from '../Post'
import Edit from '../Edit'


class AllPost extends Component {
    render() {
        return (
            <div>

            <h1 className='post_heading'>All Posts</h1>
            {this.props.post.map((post)=>(
                <div key={post.id}>
                {post.editing ?<Edit post={post} key={post.id}/>:<Post post={post} key={post.id}/>}
                </div>
            ))}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        post:state
    }
}
export default connect(mapStateToProps)(AllPost);