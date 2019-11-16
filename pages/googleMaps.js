import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React from 'react'
export class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {onzos: [], limes: [], waves: [], me: { lat: -36.849989,
      lng: 174.755657}}
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const proxyurl = "https://crossorigin.me/"
    let onzos = [] 
    fetch(proxyurl + `https://app.onzo.co.nz/nearby/${this.state.me.lat}/${this.state.me.lng}/2.0`,{
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      response.json().then(function(result) {
        for(let id in result.data) {
          let onzo = result.data[id]
          onzos.push(
            <Marker name='Onzo'
              icon={{
                url: "../Onzo.png",
                scaledSize: new google.maps.Size(24,24)
              }}
              position = {{
                lat: onzo.latitude,
                lng: onzo.longitude 
              }}
            />
          )
        }
        this.setState({...this.state, onzos: onzos})
      }.bind(this))
    }.bind(this))
    let waves = []
    fetch(`https://api.birdapp.com/bird/nearby?latitude=${this.state.me.lat}&longitude=${this.state.me.lng}&radius=0.5`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bird eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIwY2E0NGNjNC03M2IwLTRlMmUtOTRmYy1lYjczMTQ3N2UxMTEiLCJuYmYiOjE1NzM4NTY0NzIsImV4cCI6MTU3Mzk0Mjg3MiwiYXVkIjoiYmlyZC5zZXJ2aWNlcyIsImlzcyI6ImJpcmQuYXV0aCIsImlhdCI6MTU3Mzg1NjQ3Miwicm9sZXMiOlsiVVNFUiJdLCJhcHAiOiI3YjhlZDk1NS02ZTNhLTRlZWMtYmEyMC04OGFmOWQ3YWVhNzYiLCJ2ZXIiOiIwLjAuMiJ9.l-7tME3PcuacNuVUdYgyDtAnk5eY6GmBCx1vrs2SN7sYohXRLKiiDxtLHNFkJDR2tLXEbE50aCaIWUe4l3Q7d1MWKF2obEQ0Y6BEql44iczyTLQC26yEet5rgpHhsEkGQqe-VgfmRr8dlyXKY8gvGaU37WMC0A4S1CoVdaRfiTB_vDOXiG0yVcdlqkHo2Pjm9s4BBHk_D20_EbhY1txW87pbAWAAE1YG4ECEdUAF-JLduy5oAV0sqkObXgBwu9wECM54EmOSqLVxJdBhwaYr3B6BmBDCgSKiGrkqhY8h2YoZJ4GLFKpE2gENMhnlQFoGuB5oYrHkSIe7O9rxFkBAFLRqMuKA4qNrK1bmnIKe6hrG8g5I1KihyURJ-omBaR5m9KfN3BJsBg_KBecDXHheKv9q4GbwjAyao3sCEdAQuDoY8_fwKm8NBLEuFFzaMYOKc9Zirmi2bvTDutkXL7cr6a8clB6mN6wEP6ikdKTfJxNLSRa75T9xc7ma9biKhRRfxWKsnBvnULMdkCb4eHjTv4ODrtInBdT1As3ZiD1ClKOUc9DweO7rbF88q-77rEM1IfIynw-s5fEnhdJ6D7tSkIuiieJjOLl9IuQFXE-XSR_nviEeaFJo1Xkq832onDCBsIhibVArZd5AG2XYDIacjT_LBeMXUoIXph2h5WpEfiU',
        'Device-id': '5223517d-4420-42a6-a987-46bdd20f7877',
        'App-Version': '4.41.0',
        'Location': `{"latitude":${this.state.me.lat},"longitude":${this.state.me.lng},"altitude":500,"accuracy":100,"speed":-1,"heading":-1}`,
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      response.json().then(function(result) {
        for(let scootId in result.birds) {
          let scooter = result.birds[scootId];
            waves.push(
              <Marker name='Wave'
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
        this.setState({...this.state,waves: waves})
      }.bind(this))
    }.bind(this))
    let limes = []
    fetch(proxyurl + `https://web-production.lime.bike/api/rider/v1/views/map?ne_lat=${this.state.me.lat - 0.005}&ne_lng=${this.state.me.lng + 0.005}&sw_lat=${this.state.me.lat + 0.005}&sw_lng=${this.state.me.lng - 0.005}&user_latitude=${this.state.me.lat}&user_longitude=${this.state.me.lng}&zoom=15`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiV0lNREs1VkpIWTNZQyIsImxvZ2luX2NvdW50IjoyfQ.7sUZBshjJq7dZWJ9Wok1JXva43RYz5K0I_Z9wANQDaU',
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      response.json().then(function(result) {
        for(let scootId in result.data.attributes.bikes) {
          let scooter = result.data.attributes.bikes[scootId];
            limes.push(
              <Marker name='Lime'
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
        this.setState({...this.state, limes: limes})
      }.bind(this))
    }.bind(this))
  }

  componentDidMount() {
    // this.loadData()
    navigator.geolocation.getCurrentPosition(function(location) {
      this.setState({...this.state, me: {
        lat: location.coords.latitude,
        lng: location.coords.longitude 
      }})
      this.loadData()
    }.bind(this))
      
    
  }

  render() {
    return (
      <div>
        <Map 
          google={this.props.google} 
          zoom={16}
          initialCenter={this.state.me}
        >
          <Marker name='Your location'
              position= {this.state.me}
          />
          {this.state.waves}
          {this.state.onzos}
          {this.state.limes}
          
        </Map>
      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBm3QHEb18fKpLayA0m0pp32AuNmpsvH5Y'
})(MapContainer)

