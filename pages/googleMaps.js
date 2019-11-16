import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React from 'react'
import Scooters from '../wavescootersauckland'
export class MapContainer extends React.Component {
  render() {
    let coordinates = [];
    for(let scootId in Scooters.birds) {
      let scooter = Scooters.birds[scootId];
        coordinates[scootId] =
          <Marker name='Current location'
            position= {{
              lat: scooter.location.latitude,
              lng: scooter.location.longitude 
            }}
          />
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

