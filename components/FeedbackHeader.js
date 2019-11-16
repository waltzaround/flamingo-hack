import styled from 'styled-components'

const FeedbackHeaderContainer = styled.div`
text-align: center;
margin-top: 2rem;
`

const TitleContainer = styled.div`
text-align: center;
`

const StarContainer = styled.div`
margin-top: 1.5rem;
`

const FeedbackHeader = () => (
  <FeedbackHeaderContainer>
    <TitleContainer>
      <h1>How did you enjoy your ride?</h1>
    </TitleContainer>
    <StarContainer>
      <img src="./greystar.png" style={{ "maxWidth": "64px" }} />
      <img src="./greystar.png" style={{ "maxWidth": "64px" }} />
      <img src="./greystar.png" style={{ "maxWidth": "64px" }} />
      <img src="./greystar.png" style={{ "maxWidth": "64px" }} />
      <img src="./greystar.png" style={{ "maxWidth": "64px" }} />
    </StarContainer>
  </FeedbackHeaderContainer>
)
export default FeedbackHeader