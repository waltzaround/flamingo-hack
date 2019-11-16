import styled from 'styled-components'
import Page from '../components/Page'
import Header from '../components/Header'
import Footer from '../components/Footer'



const MapContainer = styled.div`



` // end MapContainer

const Map = styled.div`
height: calc(100vh - 13.5rem);
background-color: purple;
z-index: 12;

` // end MapContainer
const ScootButton = styled.div`
top: 50vh;
position: relative;

width: 40px;
height: 40px;
color: blue;
z-index: 999999;
opacity: 1;


`



const Index = () => (
    <Page>
      <Header>
        
      </Header>
      <MapContainer>
      <ScootButton />
        {/* <Map/> */}

      </MapContainer>
      <Footer>

      </Footer>
    </Page>
  );
  
  export default Index;