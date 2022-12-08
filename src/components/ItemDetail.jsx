import React from "react";
import ItemCount from "./ItemCount" 

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-6 ">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-md-2">
                <h1 className="mt-3 mb-3">{item.name}</h1>
                <h5 className="mt-3 mb-5">{item.category}</h5>
                <div className="text-center">
                    <b>${item.price}</b>
                    <ItemCount initial={1}/>
                </div>
                <p>{item.description}</p>
            </div>
        </div>

    )
}

export default ItemDetail