import React from 'react'
import Link from '../Link/Link';

function Nav() {

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Product Details", path: "/product/:id" },
    { id: 4, name: "Cart", path: "/cart" },
    { id: 5, name: "Checkout", path: "/checkout" },
  ];
  
  

  return (
    <nav className='text-white mx-2 md:flex justify-between py-3 text-xl'>
        <div className="logo">
          <p>Fash<span className='text-amber-500'>ion</span> </p>
        </div>
        <div className="menu mr-10">

        <ul className='md:flex' >
        {
            routes.map(route =><Link key={route.id} route={route}/>)
          }
        </ul>
         
        </div>
    </nav>
  )
}

export default Nav