import styled from 'styled-components'


const HeaderContainer = styled.div`
background-color: #2c384c;
height: 6rem;
width: 100vw;
margin-top: 0;

` // end header

const HeaderTopContainer = styled.div`
padding: 0.5rem;
display: flex;
`

const HeaderIconLeft = styled.img`
background-color: purple;
height: 2rem;
width: 2rem;
`

const HeaderMidText = styled.div`
height: 2rem;
margin: 0 auto;
margin-top: 0.4rem;

text-align: center;
color: white;
`

const HeaderIconRight = styled.div`
background-color: purple;
height: 2rem;
width: 2rem;
`

const HeaderSearch = styled.div`
`

const Header = () => (
   <HeaderContainer>
       <HeaderTopContainer>
           <HeaderIconLeft/>
           <HeaderMidText>aaaaa</HeaderMidText>
           <HeaderIconRight/>
       </HeaderTopContainer>

   </HeaderContainer>
) 

export default Header