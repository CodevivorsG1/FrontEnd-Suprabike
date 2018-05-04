import React from 'react';
import '../css/register.css';
import '../css/loader.css';

class CommentComponent extends React.Component {
  render(){
    return(
      <div class="row">
        <div class="col-md-6">
          <h4>{this.props.user_id}</h4>
        </div>
        <div class="col-md-6">
          <p>{this.props.comment} </p>
        </div>
      </div>
    );
  }
}

export default CommentComponent;
