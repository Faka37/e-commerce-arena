import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([])
    const [ loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db, "items", id)
        
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()})
                setLoading(false)
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