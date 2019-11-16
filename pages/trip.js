import styled from 'styled-components'
import Page from '../components/Page'
import TripHeader from '../components/TripHeader'


import MapContainer from './googleMaps'




const Trip = () => (
    <Page>
      <TripHeader />

     
   

      <MapContainer/>
     
    </Page>
  );
  
  export default Trip;