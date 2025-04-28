import React, { useState } from 'react'
import Link from '../Link/Link';
 
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";

function Nav() {

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Product Details", path: "/product/:id" },
    { id: 4, name: "Cart", path: "/cart" },
    { id: 5, name: "Checkout", path: "/checkout" },
  ];
  
  const [open, setOpen] = useState(false);
  
  
  

  return (
    <nav className='text-cyan-900 px-2 flex justify-between py-3 text-xl bg-amber-500'>
        <div className="logo">
          <p>Fash<span className='text-emerald-600'>ion</span> </p>
        </div>


        <div onClick={()=>setOpen(!open)} className="button md:hidden text-3xl mr-10">
          {
            open == true ?  <IoCloseCircle /> :  <AiOutlineMenuUnfold />
          }
        </div>


        <div className={`menu right-0  bg-amber-500  absolute md:static duration-500 ${open ? ' top-12 ': '-top-68'}   `}>
        <ul className={`md:flex  px-3 `} >
        {
            routes.map(route =><Link key={route.id} route={route}/>)
          }
        </ul> 
        </div>
    </nav>
  )
}

export default Nav