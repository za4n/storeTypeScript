
import { useContext } from 'react'
import { PRODUCTS as Products } from '../Products'
import { contextCart } from '../Context/CartContextProvider';
import CartProduct from './CartProduct';



export default function Cart() 
{
  const  {totalAmount} = useContext(contextCart); 
  const {cart,setCartOpen} = useContext(contextCart);
  return (
    <>
    <div className="cart">
     <span onClick={()=>setCartOpen(false)} className='close'>X</span> 
    <div className='c'>
     {Products.map(P=>{
      if(cart[P.id] > 0){
        return <CartProduct  key = {P.name} data = {P}></CartProduct>
      }
     })}
    </div>
    <div className="total">
    totals = {totalAmount()} 
   </div>
    </div>
    </>
  )
}
