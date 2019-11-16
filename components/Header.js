import styled from 'styled-components'


const HeaderContainer = styled.div`
background-color: #2c384c;
height: 6.5rem;
width: 100vw;
margin-top: 0;

` // end header

const HeaderTopContainer = styled.div`
padding: 0.5rem;
display: flex;
`

const HeaderIconLeft = styled.img`

height: 2rem;
width: 2rem;
`

const HeaderMidText = styled.div`
height: 2rem;
margin: 0 auto;
margin-top: 0.4rem;

font-size: 1rem;
text-align: center;
color: white;
font-weight: 600;
text-transform: uppercase;
`

const HeaderIconRight = styled.img`

height: 2rem;
width: 2rem;
`

const HeaderSearchContainer = styled.div`
background-color: white;
border-radius: 3px;
height: 2.5rem;
margin: 0 0.5rem;
`

const HeaderSearchText = styled.p`
margin-left: 0.5rem;
padding-top: 0.6rem;
font-size: 0.8rem;
color: #2c384c;
`

const Header = () => (
   <HeaderContainer>
       <HeaderTopContainer>
           <HeaderIconLeft src="./navigation.png"/>
           <HeaderMidText>Find a stop</HeaderMidText>
           <HeaderIconRight src="./alarm.png"/>
       </HeaderTopContainer>
       <HeaderSearchContainer><HeaderSearchText>
           Enter stop number or location</HeaderSearchText></HeaderSearchContainer>

   </HeaderContainer>
) 

export default Header