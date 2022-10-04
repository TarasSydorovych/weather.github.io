import {GoogleMap, useLoadScript, Marker, Data} from "@react-google-maps/api";
import {useState} from "react";




function  Map(props) {


    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyBajJsy6w9BWWPyygqK94Yu8HvhXWZWjDU',});
    if(!isLoaded) return (
        <div>
            Карта завантажується...
        </div>
    );
    return (


        <GoogleMap mapContainerClassName='mapContainer' name='win' onClick={props.oncl} zoom={10} center={{lat: 49.917757, lng: 24.620953}} > </GoogleMap>

    )

}

export default Map;