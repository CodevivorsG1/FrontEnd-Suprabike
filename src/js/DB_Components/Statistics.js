import React from 'react';
import React2 from 'react-dom';
import AppHeaderComponent from '../AppHeaderComponent.js';
import UploadZoneImages from '../Upload_Components/UploadZoneImages.js'
import axios from 'axios';
import store from '../store.js';
import {BarChart , PieChart ,ScatterplotChart , Legend} from 'react-easy-chart';

class UserComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type:'1',
      avatar_url:'/img/unknown.jpg',
      created_at:'',
      location: 'San Francisco, USA',
      login: '',
      name:'',
      surnames:'',
      gender:'',
      cellphone:'',
      telephone:'',
      isLoading: false
    }
    this.change = this.change.bind(this);
  }
  change(event){
    this.setState({type: event.target.value});
    if (this.state.type == '2') {
      console.log(this.state.type)
      this.loadBikesData()
    }
  }
  componentDidMount(){
    this.loadUserData()
  }
  loadUserData(){
    this.setState({isLoading: true})
    axios.get(store.getState().globalUrl+'users')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info('user')
                    console.info(response.data[0])
                    //this.state = response.data[0];
                    this.setState(response.data[0])
                    this.setState({ nForums: response.data[0].forums.length})
                    this.setState({ nTransactions: response.data[0].transactions.length})
                    this.setState({ nComments: response.data[0].comments.length})
                  }
                this.setState({ isLoading: false})
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck user")
                this.setState({ isLoading: false})
              })
  }
  loadBikesData(){
    axios.get(store.getState().globalUrl+'bicycles')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state.bikes = response.data[0].name_city;
                    
                  }
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }


     

  render(){
    
    //const membersToRender = this.state.forums.filter(foro => foro.id);
    //const numRows = membersToRender.length
    //console.info(membersToRender)
    const dataUser = [
                    { x: 'Foros', y: this.state.nForums ,color: '#4dbfbf'},
                    { x: 'Comentarios', y: this.state.nComments , color:'#2DA4A4' },                    
                  ];
    const dataBikes = [
      { key: 'Aluminio', value: 100 },
      { key: 'Acero', value: 200 },
      { key: 'Carbono', value: 50 }
    ]
    const scatterStyle = {
    '.legend': {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      fontSize: '0.8em',
      maxWidth: '480px',
      padding: '12px'
    }
  };
    const dataTransactions = []
    for (var i = 0; i < this.state.nTransactions; i++) {
      var transaction = {
                      type: i,
                      x: this.state.transactions[i].type_transaction + ' $' + this.state.transactions[i].total_transaction,
                      y: this.state.transactions[i].total_transaction
                    }

                    dataTransactions.push(transaction)
    }
    
    if (this.state.isLoading){

      return(
        <div className="loader"></div>
      );
    }else if (this.state.type == '1'){
    return (
			<div class="container">
			    <div class="row">
			        <div class="col-xs-12 col-sm-6 col-md-6">
			            <div class="well well-sm">
			                <div class="row">
			                    <div class="col-sm-4 col-md-4">
			                        <label for="exampleFormControlSelect1">Seleccione tipo de estadisticas</label>
                                <select class="form-control" onChange={this.change}  id="exampleFormControlSelect1">
                                  <option value="1">Usuario</option>
                                  <option value="2">Bicicletas</option>
                                  <option value="3">Técnicos</option>
                                  
                                  
                                </select>
			                    </div>
			                    <div class="col-sm-8 col-md-8">
			                        <div id="myContainer"></div>
                              <h2>Participación</h2>
                                  <BarChart
                                    axes
                                    height={250}
                                    width={400}
                                    data={dataUser}
                                  />
                                  <h2>Compras</h2>
                                  <ScatterplotChart
                                    data={dataTransactions}
                                    axes
                                    axisLabels={{x: 'Tipo', y: 'Valor'}}
                                    dotRadius={6}
                                    width={480}
                                    height={270}
                                    grid
                                    xType="text"
                                     
                                  />
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
          
			</div>

	    );}
      else if (this.state.type == '2'){
    return (
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="well well-sm">
                      <div class="row">
                          <div class="col-sm-4 col-md-4">
                              <label for="exampleFormControlSelect1">Seleccione tipo de estadisticas</label>
                                <select class="form-control" onChange={this.change}  id="exampleFormControlSelect1">
                                  <option value="1">Usuario</option>
                                  <option value="2">Bicicletas</option>
                                  <option value="3">Técnicos</option>
                                  
                                  
                                </select>
                          </div>
                          <div class="col-sm-8 col-md-8">
                              <div id="myContainer"></div>
                                  <PieChart
                                    labels
                                    styles={{
                                      '.chart_lines': {
                                        strokeWidth: 0
                                      },
                                      '.chart_text': {
                                        fontFamily: 'serif',
                                        fontSize: '1.25em',
                                        fill: '#333'
                                      }
                                    }}
                                    data={dataBikes}
                                  />
                                  <Legend data={dataBikes} dataId={'value'} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>

      );}else if (this.state.type == '3'){
    return (
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="well well-sm">
                      <div class="row">
                          <div class="col-sm-6 col-md-4">
                              <label for="exampleFormControlSelect1">Seleccione tipo de estadisticas</label>
                                <select class="form-control" onChange={this.change}  id="exampleFormControlSelect1">
                                  <option value="1">Usuario</option>
                                  <option value="2">Bicicletas</option>
                                  <option value="3">Técnicos</option>
                                  
                                  
                                </select>
                          </div>
                          <div class="col-sm-6 col-md-8">
                              <div id="myContainer"></div>
                                  
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>

      );}
    return(
      <div>
        
        Loading
        
      </div>
    );
  }
}

export default UserComponent;
