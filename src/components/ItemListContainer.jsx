import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./json/products.json"
import Loader from "./Loader"

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [ loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(id ? products.filter (item => item.category === id) : products)
            }, 2000)
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id])

    return (
        <div className="container ">
            <div>
                {
                    loading ? <Loader /> : <ItemList item={item} />
                }
            </div>
            
        </div>
    )
}

export default ItemListContainer