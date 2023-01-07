import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";
//import products from "./json/products.json"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([])
    const [ loading, setLoading] = useState(false)
    const { id } = useParams()

/*     useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(products.find (item => item.id === parseInt(id)))
            }, 2000)
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id]) */

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db, "items", id)
        
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()})
            } else {
                console.log("el producto no existe");
            }
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