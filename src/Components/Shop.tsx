
import { PRODUCTS as Products } from '../Products'
import Product from './Product'

type ShopProp = {
  value :string
}

export default function Shop({value}:ShopProp) {
  return (
    <div className='shop'>
      {Products.map(P=>{
        if(P.name.includes(value.toUpperCase()) || P.name.includes(value.toLowerCase()))
        return <Product key={P.id} data={P}/>
      })}
    </div>
  )
}
