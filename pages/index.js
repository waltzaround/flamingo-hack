import styled from 'styled-components'
import Page from '../components/Page'
import Header from '../components/Header'
import Footer from '../components/Footer'

import MapContainer from './googleMaps'

const Map = styled.div`
height: calc(100vh - 13.5rem);
background-color: purple;
z-index: 12;

` // end MapContainer




const Index = () => (
    <Page>
      <Header/>
      <MapContainer/>
      <a href="scanner.html">
        <Footer/>
      </a>
    </Page>
  );
  
  export default Index;