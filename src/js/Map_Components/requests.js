getGeocode(url){
    axios.get(url)
        .then((response) => {
            let data = response.data.results[0].geometry.location;
            this.state.storesAddresses.push(data);
            this.state.storesMarkers.push(<Marker position={data}/>)
            //console.log(this.state.storesMarkers);
        })
        .catch((error) => {
            console.log("No data found!");
        })

}

componentWillMount(){
    axios.get("http://localhost:4000/stores")
        .then((response) => {
            //console.log(response);
            for(var x in response.data){    // Obtiene todas las direcciones del pedido
                let record = response.data[x]
                let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + record.address_store +",Bogotá&key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A";                    
                this.getGeocode(url);
            }
            console.log(this.state.storesAddresses);
        })
        .catch((error) => {
            console.log("Nothing happened");
        })
}