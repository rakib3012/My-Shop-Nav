import React from 'react'
import CardsInfo from '../CardsInfo/CardsInfo';

export default function Cards() {

    const products = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 2500,
          description: "High quality wireless headphones with noise cancellation.",
          image: "https://example.com/images/headphones.jpg",
          category: "Electronics",
          stockQuantity: 120,
        },
        {
          id: 2,
          name: "Smartwatch",
          price: 3500,
          description: "Stylish smartwatch with health tracking features.",
          image: "https://example.com/images/smartwatch.jpg",
          category: "Accessories",
          stockQuantity: 85,
        },
        {
          id: 3,
          name: "Gaming Laptop",
          price: 95000,
          description: "Powerful gaming laptop with RTX graphics card.",
          image: "https://example.com/images/laptop.jpg",
          category: "Computers",
          stockQuantity: 20,
        },
        {
          id: 4,
          name: "Office Chair",
          price: 8000,
          description: "Ergonomic office chair for comfortable working.",
          image: "https://example.com/images/chair.jpg",
          category: "Furniture",
          stockQuantity: 50,
        },
        {
          id: 5,
          name: "DSLR Camera",
          price: 45000,
          description: "Professional DSLR camera for high-quality photography.",
          image: "https://example.com/images/camera.jpg",
          category: "Photography",
          stockQuantity: 30,
        },
      ];
      
  return (
    <div className='mx-10'> 
       <div>
       <h3 className='text-4xl font-bold text-center my-3'>Our Products List !!</h3>
       </div>

       <div className="card grid grid-cols-3 gap-3 items-center ">
        {
            products.map(product=> <CardsInfo key={product.id} info={product} />)
        }
       </div>


    </div>
  )
}
