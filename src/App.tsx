
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';
import './main.css';

//components
import Nav from './Components/Nav';
import Shop from './Components/Shop';


//Context
import CartContextProvider from './Context/CartContextProvider';
import {useState} from 'react';
export default function App(){
  const [search,setSearch] = useState<string>("");
  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Nav value = {search} onChange = {onChange}/>}>
     <Route index element = {<Shop value={search}/>}></Route>
  
    </Route>
  )
)

  return (
    <CartContextProvider>
<RouterProvider router={router}/>
    </CartContextProvider>
    
  );
}

