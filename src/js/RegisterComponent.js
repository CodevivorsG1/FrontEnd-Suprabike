import React from 'react';
import AppHeaderComponent from './AppHeaderComponent.js';
import {Redirect} from 'react-router-dom';
import '../css/register.css';
import '../css/loader.css';
import axios from 'axios';
import store from './store'
import TechnicianList from './TechnicianList.js';
import swal from 'sweetalert';

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      surnames: '',
      email: '',
      password: '',
      passwordConfirm: '',
      cellphone: '',
      telephone: '',
      gender: '',
      isLoading: false,
      redirect: false,
      role: "users",
      techCost: '',
      workType: '',
      address: '',
      city: 'seleccione',
      city_id:'1',
      cities:[],
      images: null

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSmallChange = this.handleSmallChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    axios.get(store.getState().globalUrl + 'cities')
    .then((response) =>{
      this.setState({cities: response.data})
    })
    .catch((e) =>{
      console.log("error cities, ", e)
    })
  }
  handleChange (e){
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target);
  }

  handleSmallChange (e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  dispatch = (response) =>{
    store.dispatch({
      type: 'ADD_TOKEN',
      token: response.data.authentication_token,
      userType: this.state.role
    })
  }
  handleUser = (prevResponse) =>{
    axios.post(store.getState().globalUrl + `${this.state.role}_sessions`,
                  {
                    'password': this.state.password,
                    'email': prevResponse.data.email
                  }
              , 
              {headers: {
                'Content-type': 'application/json'
              }
            })
    .then((response) =>
    (
      this.dispatch(response)
     
    ))
    .catch()
  }
  userPetition = () =>{

    const new_user = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirm,
      idUser: "456",
      nameUser: this.state.names,
      surnameUser: this.state.surnames, 
      genderUser: this.state.gender, 
      phonenumUser: this.state.telephone, 
      celphoneUser: this.state.cellphone,
      city_id: this.state.city_id
    }

    axios.post(store.getState().globalUrl + 'users/',
      new_user)
                  .then((response)=>{
                    console.log('Success ...(?)')
                    console.log(response)
                    this.setState({ isLoading: false, redirect:true})
                    this.handleUser(response)
                    this.props.history.push('/home/undefined')
                  })
                  .catch((error)=>{
                    console.log('Failed miserably :(', error)
                    this.setState({ isLoading: false})
                    swal ( "Error" ,  `compruebe su correo, ya esta registrado ${error}` ,  "error" )
                  })
  }
  techniciansPetition = () =>{
    
    const new_user = {
      email: this.state.email,
      password: this.state.password,
      id_technical: "456",
      NameTec: this.state.names,
      SurnameTec: this.state.surnames, 
      typeworktec: this.state.workType,
      costhourtec: this.state.techCost,
      phonenumtec: this.state.telephone, 
      celphoneUser: this.state.cellphone,
      city_id: "1"
    }

    axios.post(store.getState().globalUrl + 'technicians/',
      new_user)
                  .then((response)=>{
                    console.log('Success ...(?)')
                    console.log(response)
                    this.setState({ isLoading: false})
                    this.handleUser(response)
                    this.props.history.push('/home/undefined')
                  })
                  .catch((error)=>{
                    console.log('Failed miserably :(', new_user)
                    this.setState({ isLoading: false})
                    swal ( "Error" ,  `compruebe su correo, ya esta registrado ${error}` ,  "error" )
                  })
  }
  storesPetition = () =>{
    
    const new_user = {
      email: this.state.email,
      password: this.state.password,
      id_store: 100 + Math.random() * (1000 - 100),
      name_store: this.state.names,
      address_store: this.state.address,
      phonenum_store: this.state.telephone, 
      celphone_store: this.state.cellphone,
      city_id: this.state.city_id,
      score_store: "0"
    }

    axios.post(store.getState().globalUrl + 'stores/',
      new_user)
                  .then((response)=>{
                    console.log('Success ...(?)')
                    console.log(response)
                    this.setState({ isLoading: false})
                    this.handleUser(response)
                    this.props.history.push('/home/undefined')
                  })
                  .catch((error)=>{
                    console.log('Failed miserably :(', error)
                    this.setState({ isLoading: false})
                    swal ( "Error" ,  `compruebe su correo, ya esta registrado ${error}` ,  "error" )
                  })
  }
  handleSubmit(e) {
    
    e.preventDefault();
    
    console.log('Component state:', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('Form is invalid: do not submit');
    } else {
      console.log('Form is valid: submit');
      this.setState({ isLoading: true })
      switch(this.state.role){
        case "users":
          this.userPetition();
          break;
        case "technicians":
          this.techniciansPetition();
          break;
        case "stores":
          this.storesPetition();
          break;
      }
                  
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('.getIt');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(input) {
    const name = input.name;
    const validity = input.validity;
    const label = document.getElementById(`${name}Label`).textContent;
    const error = document.getElementById(`${name}Error`);

    const isPassword = name.indexOf('password') !== -1;
    const isPasswordConfirm = name === 'passwordConfirm';
    if (isPasswordConfirm) {
      if (this.password.value !== this.passwordConfirm.value) {
        this.passwordConfirm.setCustomValidity('Las contraseñas no coinciden.');
      } else {
        this.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} es un campo requerido`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} debe ser una dirección valida`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} debe tener más de 4 caracteres`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Las contraseñas no coinciden';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      images: event.target.files[0]
    })
  }

  fileUploadHandler = () => {

  }
  
  render() {
    const { redirect } = this.state.redirect;
    const section = store.getState().sectionView
    if (redirect) {
      console.log("entra aquí")
      return <Redirect to={'/home/'+section} />;
    }
    if (this.state.isLoading){
      return(
        <div>
          <AppHeaderComponent />
          <div className="loader position-middle"/>
        </div>
      )
    }else if (this.state.role === "technicians"){
      return(<div>
          <AppHeaderComponent />
            <form onSubmit={this.handleSubmit} noValidate>
            
            <div class="container-fluid">
              <div class="panel register-square">
                <div class="panel-heading">
                  <h3 class="panel-heading">Registrese en SupraBikes</h3>
                </div>
                <div class="row">
                  <div class="col-md-12">
                  <select name="role" id="role-list"
                    defaultValue={this.state.role} onChange={(e)=>this.setState({role: e.target.value })}>
                    <option value="users">Usuario</option>
                    <option value="stores">Tienda</option>
                    <option value="technicians">Técnico</option>
                  </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      
                      <label id="namesLabel">Nombres</label>
                      <input type="text" name="names"
                       id="first_name" class="form-control input-sm getIt"
                       value={this.state.names} onChange={this.handleChange}
                       placeholder="Nombres" required/>
                     <div className="error" id="namesError" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="surnamesLabel">Apellidos</label>
                      <input type="text" name="surnames"
                       id="last_name" class="form-control input-sm getIt"
                       value={this.state.surnames} onChange={this.handleChange}
                       placeholder="Apellidos" required/>
                     <div className="error" id="surnamesError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label id="emailLabel">Email</label>
                      <input type="email" name="email"
                       class="form-control input-sm getIt"
                       value={this.state.email} onChange={this.handleChange}
                       placeholder="Email" required/>
                     <div className="error" id="emailError"/>
                    </div>
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordLabel">Contraseña</label>
                      <input type="password" name="password"
                       class="form-control input-sm getIt" pattern=".{5,}"
                       ref={password => this.password = password}
                       value={this.state.password} onChange={this.handleChange}
                       placeholder="Contraseña" required/>
                      <div className="error" id="passwordError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordConfirmLabel">Confirma Contraseña</label>
                      <input type="password" name="passwordConfirm"
                       class="form-control input-sm required"
                       ref={passwordConfirm => this.passwordConfirm = passwordConfirm}
                       value={this.state.passwordConfirm} onChange={this.handleChange}
                       placeholder="Confirma Contraseña" required/>
                      <div className="error" id="passwordConfirmError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                  <div class="form-group">
                      <label id="techCostLabel">Costo</label>
                      <input type="cost" name="techCost"
                       class="form-control input-sm"
                       onChange={this.handleSmallChange}
                       placeholder="Costo por hora"
                       required/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="workTypeLabel">Tipo de trabajo</label>
                      <input type="workType" name="workType"
                       class="form-control input-sm"
                       onChange={this.handleSmallChange}
                       maxlength="7"
                       placeholder="Tipo de trabajo"/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="cellphoneLabel">Celular</label>
                      <input type="tel" name="cellphone"
                       class="form-control input-sm getIt"
                       value={this.state.cellphone} onChange={this.handleChange}
                       placeholder="Celular"
                       maxlength="10" required/>
                     <div className="error" id="cellphoneError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="telephoneLabel">Telefono</label>
                      <input type="tel" name="telephone"
                       class="form-control input-sm"
                       value={this.state.telephone} onChange={this.handleChange}
                       maxlength="7"
                       placeholder="Telefono"/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <input type="submit" value="Registrarse" class="btn btn-info btn-block"/>
                  </div>
                </div>
  
              </div>
  
            </div>
          </form>
        </div>)
    }else if (this.state.role === "stores"){
      return(
      <div>
        <AppHeaderComponent />
          <form onSubmit={this.handleSubmit} noValidate>
          
          <div class="container-fluid">
            <div class="panel register-square">
              <div class="panel-heading">
                <h3 class="panel-heading">Registrese en SupraBikes</h3>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <select name="role" id="role-list"
                    defaultValue={this.state.role} onChange={(e)=>this.setState({role: e.target.value })}>
                    <option value="users">Usuario</option>
                    <option value="stores">Tienda</option>
                    <option value="technicians">Técnico</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select name="city_id" id="city-list"
                    defaultValue={this.state.city} onChange={(e)=>this.setState({city_id: e.target.value })}>
                    {
                      
                      this.state.cities.map((city) =>(
                        <option value={city.id}>{city.name_city}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    
                    <label id="namesLabel">Nombres</label>
                    <input type="text" name="names"
                     id="first_name" class="form-control input-sm getIt"
                     value={this.state.names} onChange={this.handleChange}
                     placeholder="Nombres" required/>
                   <div className="error" id="namesError" />
                  </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    
                    <label id="addressLabel">Dirección</label>
                    <input type="text" name="address"
                     id="first_name" class="form-control input-sm getIt"
                     onChange={this.handleChange}
                     placeholder="Dirección" required/>
                   <div className="error" id="addressError" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label id="emailLabel">Email</label>
                    <input type="email" name="email"
                     class="form-control input-sm getIt"
                     value={this.state.email} onChange={this.handleChange}
                     placeholder="Email" required/>
                   <div className="error" id="emailError"/>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="passwordLabel">Contraseña</label>
                    <input type="password" name="password"
                     class="form-control input-sm getIt" pattern=".{5,}"
                     ref={password => this.password = password}
                     value={this.state.password} onChange={this.handleChange}
                     placeholder="Contraseña" required/>
                    <div className="error" id="passwordError" />
                  </div>

                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="passwordConfirmLabel">Confirma Contraseña</label>
                    <input type="password" name="passwordConfirm"
                     class="form-control input-sm required"
                     ref={passwordConfirm => this.passwordConfirm = passwordConfirm}
                     value={this.state.passwordConfirm} onChange={this.handleChange}
                     placeholder="Confirma Contraseña" required/>
                    <div className="error" id="passwordConfirmError" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="cellphoneLabel">Celular</label>
                    <input type="tel" name="cellphone"
                     class="form-control input-sm getIt"
                     value={this.state.cellphone} onChange={this.handleChange}
                     placeholder="Celular"
                     maxlength="10" required/>
                   <div className="error" id="cellphoneError" />
                  </div>

                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="telephoneLabel">Telefono</label>
                    <input type="tel" name="telephone"
                     class="form-control input-sm"
                     value={this.state.telephone} onChange={this.handleChange}
                     maxlength="7"
                     placeholder="Telefono"/>
                   <div className="error" id="telephoneError" />
                  </div>
                </div>
              </div>          


              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4 col-md-offset-4">
                  <input type="submit" value="Registrarse" class="btn btn-info btn-block"/>
                </div>
              </div>

            </div>

          </div>
        </form>
      </div>
      )
    }else{
      return (
        <div>
          <AppHeaderComponent />
            <form onSubmit={this.handleSubmit} noValidate>
            
            <div class="container-fluid">
              <div class="panel register-square">
                <div class="panel-heading">
                  <h3 class="panel-heading">Registrese en SupraBikes</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <select name="role" id="role-list"
                      defaultValue={this.state.role} onChange={(e)=>this.setState({role: e.target.value })}>
                      <option value="users">Usuario</option>
                      <option value="stores">Tienda</option>
                      <option value="technicians">Técnico</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <select name="city_id" id="city-list"
                      defaultValue={this.state.city} onChange={(e)=>this.setState({city_id: e.target.value })}>
                      {
                        this.state.cities.map((city) =>(
                          <option value={city.id}>{city.name_city}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      
                      <label id="namesLabel">Nombres</label>
                      <input type="text" name="names"
                       id="first_name" class="form-control input-sm getIt"
                       value={this.state.names} onChange={this.handleChange}
                       placeholder="Nombres" required/>
                     <div className="error" id="namesError" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="surnamesLabel">Apellidos</label>
                      <input type="text" name="surnames"
                       id="last_name" class="form-control input-sm getIt"
                       value={this.state.surnames} onChange={this.handleChange}
                       placeholder="Apellidos" required/>
                     <div className="error" id="surnamesError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label id="emailLabel">Email</label>
                      <input type="email" name="email"
                       class="form-control input-sm getIt"
                       value={this.state.email} onChange={this.handleChange}
                       placeholder="Email" required/>
                     <div className="error" id="emailError"/>
                    </div>
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordLabel">Contraseña</label>
                      <input type="password" name="password"
                       class="form-control input-sm getIt" pattern=".{5,}"
                       ref={password => this.password = password}
                       value={this.state.password} onChange={this.handleChange}
                       placeholder="Contraseña" required/>
                      <div className="error" id="passwordError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordConfirmLabel">Confirma Contraseña</label>
                      <input type="password" name="passwordConfirm"
                       class="form-control input-sm required"
                       ref={passwordConfirm => this.passwordConfirm = passwordConfirm}
                       value={this.state.passwordConfirm} onChange={this.handleChange}
                       placeholder="Confirma Contraseña" required/>
                      <div className="error" id="passwordConfirmError" />
                    </div>
                  </div>
                </div>
  
                <div class="row gen_part">
                  <div class="col-md-3">
                    Género
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="hombre" checked={this.state.gender === "hombre"}
                       onChange={this.handleSmallChange} /> Hombre
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="mujer" checked={this.state.gender === "mujer"}
                       onChange={this.handleSmallChange} /> Mujer
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="otro" checked={this.state.gender === "otro"}
                       onChange={this.handleSmallChange} /> Otro
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="cellphoneLabel">Celular</label>
                      <input type="tel" name="cellphone"
                       class="form-control input-sm getIt"
                       value={this.state.cellphone} onChange={this.handleChange}
                       placeholder="Celular"
                       maxlength="10" required/>
                     <div className="error" id="cellphoneError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="telephoneLabel">Telefono</label>
                      <input type="tel" name="telephone"
                       class="form-control input-sm"
                       value={this.state.telephone} onChange={this.handleChange}
                       maxlength="7"
                       placeholder="Telefono"/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <input type="submit" value="Registrarse" class="btn btn-info btn-block"/>
                  </div>
                </div>
  
              </div>
  
            </div>
          </form>
        </div>
      );
    }
  }
}

export default RegisterComponent;
