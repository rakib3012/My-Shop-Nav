import React from 'react'

export default function Link({route}) {
  return (
   
    <>
     <li className=' mr-10'><a href={route.path}>{route.name}</a></li>
    </>
  )
}
