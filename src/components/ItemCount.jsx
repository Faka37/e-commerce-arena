import React, { useState } from "react";

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial)

    const increanse = () => count < stock && setCount(count + 1) 
    const decrease = () => count > initial && setCount(count - 1) 

    const onAdd = () => {
        if (stock > 0){
            console.log("Agregaste " + count + " productos al carrito")
        }
    }


    return (
        <div className="m-5">
            <button type="button" className="btn btn-light" onClick={decrease}>-</button>
            <span>{count}</span>
            <button type="button" className="btn btn-light" onClick={increanse}>+</button>
            <button type="button" className="btn btn-primary" onClick={onAdd}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount