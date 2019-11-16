import styled from 'styled-components'

const FeedbackInputContainer = styled.div`
margin-top: 2rem;
text-align: center;
margin-top: 2rem;
`

const CommentInput = styled.textarea`
width: 80%;
border: 2px solid black;
padding: 1rem;
height: 8rem;
margin-top: 1rem;
`
const ButtonContainer = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
width: 100%;
content-align: center;
`
const DoneButton = styled.button`
background-color: #2c384c;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
font-weight: bold;
display: inline-block;
font-size: 24px;
width: 100%
`

const FeedbackInput = () => (
  <FeedbackInputContainer>
    <div>
      <h2>Tell us more (optional)</h2>
    </div>
    <div>
      <CommentInput placeholder="Enter comments" />
    </div>
    <ButtonContainer>
      <a href="/"><DoneButton>Done</DoneButton></a>
    </ButtonContainer>
  </FeedbackInputContainer>
)

export default FeedbackInput