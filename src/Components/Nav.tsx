import { useContext } from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import { contextCart } from '../Context/CartContextProvider';
import Cart from './Cart';

type NavProps = {
  value : string,
  onChange : (e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Nav({value,onChange}:NavProps) {
  const  {totalAmount,totalItems,setCartOpen,cartOpen} = useContext(contextCart); 
  const total = totalAmount();
  
  return (
    <>
    <div className='navBar'>
        <nav>
            <ul>
                <li><NavLink to ='/'>Shop</NavLink></li>
              
               <li className='searchAndLi'>
             <input type="text" value={value} onChange={onChange} placeholder='SearchHere..' />
             {total>0 &&<b onClick={()=>setCartOpen(true)}>Cart <small>{totalItems()>0 && totalItems()}</small></b>}
            </li>
            </ul>
            
        </nav>
        <div className="o">
        {cartOpen && <Cart></Cart>}
        </div>
        
    </div>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  )
}
