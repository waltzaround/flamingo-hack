import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React from 'react'
import Waves from '../data/wave'
import Limes from '../data/lime'
import Onzos from '../data/onzo'
import Axios from 'axios'
export class MapContainer extends React.Component {
  render() {
    Axios.get('https://app.onzo.co.nz/nearby/-36.848123/174.765588/50.0').then(function (response) {
      console.log(response)
    }, {'headers': {'Access-Control-Allow-Origin': '*','origin': 'http://localhost:3000', mode: 'cors', 'content-type': 'application/JSON'}
  })
    let coordinates = [];
    for(let scootId in Waves.birds) {
      let scooter = Waves.birds[scootId];
        coordinates.push(
          <Marker name='Current location'
            icon={{
              url: "../Wave.png",
              scaledSize: new google.maps.Size(24,24)
            }}
            position= {{
              lat: scooter.location.latitude,
              lng: scooter.location.longitude 
            }}
          />)
    }
    for(let scootId in Limes.data.attributes.bikes) {
      let scooter = Limes.data.attributes.bikes[scootId];
      console.log(scooter);
        coordinates.push(
          <Marker name='Current location'
            icon={{
              url: "../Lime.png",
              scaledSize: new google.maps.Size(32,32)
            }}
            position= {{
              lat: scooter.attributes.latitude,
              lng: scooter.attributes.longitude 
            }}
          />)
    }
    
    for(let scootId in Onzos) {
      let scooter = Onzos[scootId];
      console.log(scooter);
        coordinates.push(
          <Marker name='Current location'
            icon={{
              url: "../Onzo.png",
              scaledSize: new google.maps.Size(24,24)
            }}
            position= {{
              lat: scooter.latitude,
              lng: scooter.longitude 
            }}
          />)
    }

    return (
      <Map 
        google={this.props.google} 
        zoom={14}
        initialCenter={{
          lat: -36.85,
          lng: 174.75 
        }}
      >
        {coordinates}
      </Map>
    )
    }
  }

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)

