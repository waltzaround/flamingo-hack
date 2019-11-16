import styled from 'styled-components'
import Page from '../components/Page'
import TripHeader from '../components/TripHeader'

import MapContainer from './googleMaps'

const TripSummaryContainer = styled.div`
  height: 3.5rem;
  width: 22rem;
  left: calc(50% - 11.4rem);
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
  position: absolute;
  z-index: 4;
  top: 4rem;
  padding: 0.4rem;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  text-align: center;


`
const TripStat = styled.h1`
font-size: 1.5rem;
color: #2c384c;

`

const Divider = styled.div`
width: 2px;
background-color: #E8EBEE;
margin-top: 24px;
margin-bottom: 16px;
border-radius: 16px;
`


const CancelButton = styled.div`
  height: 3.5rem;
  width: 22rem;
  left: calc(50% - 11.4rem);
  background-color: #2d7caf;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
  position: absolute;
  z-index: 4;
  bottom: 2rem;
  padding: 0.4rem;



`

const CancelText = styled.div`
position: relative;
margin: 0 auto;
margin-top: 0.7rem;
text-align: center;
font-size: 1.4rem;
font-weight: 700;
color: white;
`


const Trip = () => (
  <Page>
    <TripHeader />
    <TripSummaryContainer>
      <div>
        Distance:<br />
        <TripStat>2KM</TripStat>
      </div>
      <Divider />
      <div>
        Cost:<br />
        <TripStat>$1.23</TripStat>
      </div>

    </TripSummaryContainer>
    <CancelButton>
      <a href="./feedback"><CancelText>End Ride</CancelText></a>
    </CancelButton>
    <MapContainer />
  </Page>
)

export default Trip
