import { createContext,useState} from 'react';
import {PRODUCTS as Products} from '../Products';

type CartContextProviderProps = {
  children : React.ReactNode
}
type itemType={
[key:string|number]:number
}
type contextType = {
  cart : itemType,
  addToCart : (id:number)=>void,
  removeToCart : (id:number)=>void,
  totalAmount:()=>number
  totalItems:()=>number,
  cartOpen:boolean,
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
  clearProduct : (id:number)=>void
}

export const contextCart = createContext<contextType>({}as contextType);

const initialItems = ()=>{
  let items:itemType = {};
  for (let i = 0;i<Products.length;i++){
      items[i+1] = 0;
  }
  return items;
}

export default function CartContextProvider({children}:CartContextProviderProps)
{
  const [cart,setCart] = useState<itemType>(()=>initialItems());
  const [cartOpen,setCartOpen] = useState<boolean>(false);
  const addToCart =(id:number)=>{
    setCart(previous=>({...previous,[id]:previous[id]+1}))
  }
  const removeToCart =(id:number)=>{
    setCart(previous=>({...previous,[id]:previous[id]-1}))
  }
  const totalAmount = ()=>{
    let amount = 0;
     Products.forEach(product=>{
      if(cart[product.id] > 0){
        amount +=cart[product.id]*product.Price;
      }
     })
     return amount;
    }
    const totalItems = ()=>{
      let amount = 0;
     Products.forEach(product=>{
      if(cart[product.id] > 0){
        amount+=cart[product.id];
      }
     })
     return amount;
    }
    const clearProduct = (id:number)=>{
     setCart({...cart ,[id]:0})
    }
  


  return (
    <>
    <contextCart.Provider value={{cart,addToCart,removeToCart,totalAmount,totalItems,cartOpen,setCartOpen,clearProduct}}>{children}</contextCart.Provider>
    
    </>
  );
}
