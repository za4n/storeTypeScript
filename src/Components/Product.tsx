import {useContext} from 'react';
import { contextCart } from '../Context/CartContextProvider';

import { ProductType } from '../Products';
type ProductProps={
    data : ProductType
}
export default function Product({data}:ProductProps) {
    const {addToCart,cart,removeToCart} = useContext(contextCart);
    const {id , name , Price} = data;
  return (
    <div className='Product'>
      <p>{name} <span>{Price}$</span></p>  
      {cart [id] === 0 ? <button className='addcart' onClick={()=>{addToCart(id)}}><>Add to Cart </></button>:<>
      <div className="buttons">
    <button className='minus'onClick={()=>{removeToCart(id)}}>-</button>
    <p>{cart[id]} in cart</p>
    <button className='plus'onClick={()=>{addToCart(id)}}>+</button>
  </div>
      </>}
    </div>
  )
}
