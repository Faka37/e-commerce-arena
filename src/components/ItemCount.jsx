import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const [ itemStock, setItemStock] = useState(stock)
    const [ sold, setSolt] = useState(false)

    const increanse = () => count < itemStock && setCount(count + 1) 
    const decrease = () => count > 1 && setCount(count - 1) 

    const addToCart = (quantity) => {
        if ( count <= itemStock) {
            setCount(1)
            setItemStock(itemStock - quantity )
            setSolt(true)
            onAdd(quantity)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])



    return (
        <div className="m-5">
            <button type="button" className="btn btn-light" onClick={decrease}>-</button>
            <span>{count}</span>
            <button type="button" className="btn btn-light" onClick={increanse}>+</button>
            { sold ? <Link to={"/cart"} className="btn btn-primary">Terminar compra</Link> : <button type="button" className="btn btn-primary" onClick={() => {addToCart(count)}}>agregar al carrito</button> }
        </div>
    )
}

export default ItemCount