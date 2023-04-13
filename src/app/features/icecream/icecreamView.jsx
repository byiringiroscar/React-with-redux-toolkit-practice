import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
  return (
    <div>
        <h2>Number of ice creams - {numOfIceCream}</h2>
        <button>Order ice cream</button>
        <button>Restock  ice creams</button>
    </div>
  )
}

export default IcecreamView