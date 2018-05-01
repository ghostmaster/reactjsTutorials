import React, { Component } from 'react';
import axios from 'axios';


//https://www.reddit.com/r/space.json
export class ApiCall extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         subr: 'space'
      }
      this.getReddit = this.getReddit.bind(this);
    }

    componentWillMount = () => {
      this.getReddit();
    }

    getReddit() {
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
        })
    }
    
    

  render() {
    return (
      <div>
        <h1>
            {`/r/${this.state.subr}`}
        </h1>
        <ul>
            {this.state.posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default ApiCall