import React, { Component } from 'react';
import '../css/register.css';
import '../css/loader.css';

class ForumModal extends Component {
    render() {
        return (
            <div>
              
              <div class="container-fluid">
                <div class="panel register-square">
                  <div class="panel-heading">
                    <h3 class="panel-heading">Post en SupraBikes</h3>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                     <p>{this.props.userName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                        <h3>{this.props.question}</h3>
                    </div>
                  </div>
                  <hr/>
                  <div className="container">
                    {
                        
                    }
                  </div>
    
                 </div>
              </div> 
          </div>
        );
    }
}

export default ForumModal;