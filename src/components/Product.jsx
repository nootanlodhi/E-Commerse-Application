import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'

const Info=styledComponents.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.2);
  z-index:3;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transition: all 0.5s ease;
  cursor:pointer;
`;

const Container=styledComponents.div`
    flex:1;
    margin: 5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:cenetr;
    background-color:#dbeaf4;
    position:relative;

    &:hover ${Info}{
   opacity:1;
    }
`;

const Circle=styledComponents.div`
  width:200px;
  height:200px;
  border-radius:50%;
  background-color:white;
  position:absolute;
`;
const Image=styledComponents.img`
height:75%;
z-index:2;
`;
// const Info=styledComponents.div`
//   width:100%;
//   height:100%;
//   position:absolute;
//   top:0;
//   left:0;
//   background-color:rgba(0,0,0,0.2);
//   z-index:3;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   opacity:0;
// `;
const Icon=styledComponents.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition: all 0.5s ease;

&:hover{
    background-color:#b7d7e8;
    transform:scale(1.1);
}
`;

const Product = ({items}) => {
  return (
    <Container>
        <Circle/>
        <Image src={items.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product