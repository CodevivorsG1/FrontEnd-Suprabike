import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';
import store from '../store';
import axios from 'axios';

class Stores extends Component {
    constructor (props){
        super(props);
        this.state ={
            score: 0
        }
    }

    changeRating = (star) =>{
        this.setState({ score: star })
    }
    newScore = () =>{
         axios.put(store.getState().globalUrl + `stores/give_grate/${this.props.id}`, {"score":this.state.score})
         .then((response) =>{
            swal("gracias por participar");
         })
         .catch((error) =>{
            swal("Error intente de nuevo")
         })
         
     }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 ">
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 ">
                        <p>Tel: {this.props.phone}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 ">
                        <strong>Calificalo</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 justify-content-center text-center">
                        <StarRatings
                        className="justify-content-center text-center"
                        starDimension= "20px"
                        starSpacing="5px"
                        rating={this.state.score}
                        starRatedColor="RGB(215, 195, 42)"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 ">
                    <button class="btn btn-primary my-2 my-sm-0 mr-sm-2" onClick={this.newScore}>
					Enviar
				</button>	
                    </div>
                </div>
            </div>
        );
    }
}


export default Stores;