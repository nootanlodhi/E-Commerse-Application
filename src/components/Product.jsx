import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'

const Container=styledComponents.div`
    flex:1;
    margin: 5px;
`;

const Circle=styledComponents.div``;
const Image=styledComponents.img``;
const Info=styledComponents.div``;
const Icon=styledComponents.div``;

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