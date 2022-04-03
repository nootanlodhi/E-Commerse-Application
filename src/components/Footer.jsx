import styled from '@emotion/styled'
import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'

const Container=styled.div`
 display:flex;
`;
const Left=styled.div`
  flex:1;
`;
const Center=styled.div`
   flex:1;
   padding:20px;
`;

const Title=styled.h3`;
  margin-bottom:30px
`;

const List=styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`;

const ListItem=styled.li`
  width:50%;
  margin-bottom:10px;
`;

const Right=styled.div`
flex:1;
display flex:
`;

const ContectItem=styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
`;

const Payment=styled.img`
   width:70%;
`;

const Logo=styled.h1``;
const Descripition=styled.p`
  margin: 20px 0px;
`;
const SocialContainer=styled.div`
  display:flex;
`;
const SocialIcon=styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color:blue;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:20px
`;

const Footer = () => {
  return (
    <Container>
           <Left>
               <Logo>LAMA.</Logo>
               <Descripition>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et doloribus veniam. Placeat natus deleniti facere commodi ipsam amet aut perferendis consequuntur reprehenderit. Pariatur sapiente optio deleniti dolore odit doloremque!</Descripition>
               <SocialContainer>
                   <SocialIcon>
                       <Instagram/>
                   </SocialIcon>
                   <SocialIcon>
                       <Twitter/>
                   </SocialIcon>
                   <SocialIcon>
                       <Facebook/>
                   </SocialIcon>
               </SocialContainer>
           </Left>
           <Center>
               <Title>UseFull Links</Title>
               <List>
                   <ListItem>Home</ListItem>
                   <ListItem>Cart</ListItem>
                   <ListItem>Man Fashion</ListItem>
                   <ListItem>Child Fashion</ListItem>
                   <ListItem>Women Faishion</ListItem>
                   <ListItem>Accessories</ListItem>
                   <ListItem>My Account</ListItem>
                   <ListItem>Order Tracking</ListItem>
                   <ListItem>Terms</ListItem>
                   <ListItem>WishList</ListItem>
               </List>
           </Center>
           <Right>
                <Title>Contect</Title>
                <ContectItem>
                 <Phone style={{marginRight:'10px'}}/>   8768734676
                </ContectItem>
                <ContectItem>
                    <Mail style={{marginRight:'10px'}}/> mdbhdjh@gmail.com
                </ContectItem>
                <ContectItem>
                   <Room style={{marginRight:'10px'}}/> Google
                </ContectItem>
                <Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24bj3-wIeHUAWeIeM7MSL83c2ZmiSDIEqVQ&usqp=CAU'/>
           </Right>
    </Container>
  )
}

export default Footer