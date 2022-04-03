import React from 'react'
import styledComponents from 'styled-components'
import Product from './Product';
import { popularProducts } from '../data';

const Container=styledComponents.div`
  padding:20px;
  display:flex;
`;

const Productes = () => {
  return (
        <Container>
         {
             popularProducts.map((item)=>(
                 <Product items={item} key={item.id}/>
             ))
         }
        </Container>
  )
}

export default Productes