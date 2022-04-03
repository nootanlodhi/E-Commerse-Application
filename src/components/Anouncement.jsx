import styledComponents from "styled-components"

const Container=styledComponents.div`
  height:30px;
  background-color:teal;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
`;

const Anouncement = () => {
  return (
    <Container>
        Super Deal Free Shoping on Orders over $50
    </Container>
  )
}

export default Anouncement