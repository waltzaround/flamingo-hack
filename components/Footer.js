import styled from 'styled-components'

const FooterContainer = styled.div`
position: absolute;
bottom: 0;
width: 100vw;

`

const FooterContainerContainer = styled.div`
position: relative;
background-color: white;
display: grid;
height: 4rem;
grid-template-columns: 1fr 2px 1fr 2px 1fr;`

const FooterItem = styled.div`
margin-top: 0.4rem;


`

const FooterDivider = styled.div`
width: 2px;
background-color: #E8EBEE;
margin-top: 24px;
margin-bottom: 16px;
border-radius: 16px;

`

const FooterText = styled.p`
text-align: center;
font-size: 0.6rem;
font-weight: bold;
color: #2c384c;

:link {
    color: #2c384c;
}

`


const FooterIcon = styled.img`
height:32px;
width: 32px;
padding-left: calc(50% - 16px);

position: relative;


`




const Footer = () => ( 
    <FooterContainer>
        <FooterContainerContainer>
        <FooterItem><FooterIcon src="./planner.png"/><FooterText>Journey Planner</FooterText>
        </FooterItem>
        <FooterDivider/>
        <FooterItem><FooterIcon src="./live.png"/><FooterText>Live Departures</FooterText></FooterItem>

        <FooterDivider/>
        <FooterItem><FooterIcon src="./hop.png"/><FooterText>My AT HOP</FooterText></FooterItem>
        </FooterContainerContainer>
    </FooterContainer>
)

export default Footer
