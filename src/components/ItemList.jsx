import React from "react";
import Item from "./Item";

const ItemList = ({ item }) => {
    return (
        <div className="row col-md-12 m-3">
            {
                item.map(item =>

                    <Item key={item.id} item={item} />
                    
                )
            }
        </div>
    )
}

export default ItemList