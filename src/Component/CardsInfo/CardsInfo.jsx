import React from 'react'

export default function CardsInfo({info}) {
  return (
    <div>
      <div className="card border-2 border-amber-700 p-2 font-bold gap-2 ">
      <h3 className='text-2xl  '>{info.name}</h3>
      <h6 className=''>{info.price}</h6>
      <h6 className=''>{info.description}</h6>
      <h6 className=''>{info.stockQuantity}</h6>
      </div>

    </div>
  )
}
