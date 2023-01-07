import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (

        <div className="card col-md-4 border-0 text-center mt-4">
            <Link to={"/item/" + item.id} className="text-black text-decoration-none">
                <img className="card-img-top" src={item.image} alt={item.name} />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text mt-3"><b>${item.price}</b></p>
                    <button className="btn btn-primary " type="button" disabled>
                        Ver mas
                    </button>
                </div>
            </Link>
        </div >

    )

}

export default Item