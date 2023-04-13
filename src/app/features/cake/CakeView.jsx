import React from 'react'
import { useSelector } from 'react-redux';

const CakeView = () => {
const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button>Order cake</button>
        <button>Restock cakes</button>
    </div>
  )
}

export default CakeView