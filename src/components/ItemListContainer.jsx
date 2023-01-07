import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import products from "./json/products.json"
import Loader from "./Loader"

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    /* useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(id ? products.filter (item => item.category === id) : products)
            }, 2000)
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id]) */

    // Carga de productos a base de datos firebase
    /* useEffect(() => {
        const db = getFirestore()
        const ItemCollection = collection(db, "items")

        products.forEach((item) => {
            addDoc(ItemCollection, item)
        })
    }, []) */

    //Coleccion de datos
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        
        //filtra si hay id al especifico y si no vuelven los items 
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection
        getDocs(q).then((snapShot) => {
            setItem(snapShot.docs.map((doc) => (
                ({ id: doc.id, ...doc.data() })
            )))
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