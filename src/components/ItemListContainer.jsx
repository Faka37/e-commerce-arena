import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader"

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


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
            setLoading(false)
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