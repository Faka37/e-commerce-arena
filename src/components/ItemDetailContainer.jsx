import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./json/products.json"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([])
    const [ loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(products.find (item => item.id === parseInt(id)))
            }, 2000)
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id])
    return (
        <div className="container">
            {
                loading ? <Loader /> : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer