import styled from '@emotion/styled'
import { Send } from '@material-ui/icons'
import React from 'react'

const Container=styled.div`
height:60vh;
background-color:#d5b2da;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title=styled.h1`
 font-size:70px;
 margin-bottom:20px;
`;
const Description=styled.div`
font-size:25px;
font-weight:300;
margin-bottom:20px;
`;
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid gray;
`;
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button=styled.button`
flex:1;
border:none;
background-color:blue;
color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam ipsam placeat fugiat nam. Sed ullam voluptates, molestias nostrum voluptatibus facilis fugiat soluta a consequatur id aspernatur et odit dolore.</Description>
        <InputContainer>
          <Input placeholder='your Email'/>
          <Button>
              <Send/>
          </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter