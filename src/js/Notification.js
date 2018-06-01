import React from 'react';
import store from './store'
import axios from 'axios';

class Notification extends React.Component {
    
  constructor(){
    super();
    this.title = ""

  }
  componentWillMount(){
    console.log("pedir notifications")
    axios.get(store.getState().globalUrl + `notifications/get_not/`+ store.getState().userId )
                .then((response) =>{
                  console.log('notifications')
                  console.log(response)
                  this.setState({ notifications : response.data.length
                  })
                })
                .catch((error) => {
                  console.log("fuck user noti")
                  console.log(error)
                  this.setState({ isLoading: false})
                })
  }

  render() {
    return(
    <div>

    </div>
    )
  }
}

export default Notification;