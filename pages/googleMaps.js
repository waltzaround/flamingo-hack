import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React from 'react'
export class MapContainer extends React.Component {
  render() {
    return (
    <Map 
      google={this.props.google} 
      zoom={14}
      initialCenter={{
        lat: -36.85,
        lng: 174.75 
      }}
    >
    <Marker name={'Current location'}
      position= {{
        lat: -36.85,
        lng: 174.75 
      }}
    />

    </Map>)
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)

