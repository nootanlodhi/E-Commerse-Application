import { Mail, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
import Badge from '@mui/material/Badge';


const Container=styledComponents.div`
 height:60px;
 margin-bottom:20px
`;

const Wrapper=styledComponents.div`
     padding-left:20px;
     padding-right:20px;
     display:flex;
     align-items:center;
     justify-content:space-between;
`;

const Left=styledComponents.div`
  flex:1;
  display:flex;
  align-items:center;
`;

const SearchContainer=styledComponents.div`
  border:1px solid lightgray;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px
`;

const Input=styledComponents.input`
  border:none;
`;

const Language=styledComponents.span`
  font-size:14px;
  cursor:pointer;
`;

const Center=styledComponents.div`
  flex:1;
`;

 const Logo=styledComponents.h1`
   font-weight: bold;
   text-align:center;
 `;

const Right=styledComponents.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
`;

const MenuItem=styledComponents.div`
   font-size:14px;
   cursor:pointer;
   margin-left:20px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>En</Language>
            <SearchContainer>
               <Input/>
               <Search style={{color:'gray', fontSize:'15px'}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined/>
               </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar