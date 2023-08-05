import { contextCart } from '../Context/CartContextProvider';
import { useContext } from 'react'
import { ProductType } from '../Products';
type CartProductProp = {
    data : ProductType
}
export default function CartProduct({data}:CartProductProp) {
    const { name, Price,id} = data;
    const  {clearProduct} = useContext(contextCart); 
  return (
    <>
    <div className='cartProduct'>
      <p>Name {name}</p>
      <p>Price {Price}</p>
      <span className='clear' onClick={()=>clearProduct(id)}>X</span>
   </div>
   
    </>

   
  )
}
