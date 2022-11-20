/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn bg-light position-relative">
                <span className="position-absolute top-5 start-100 ¡ badge rounded-pill bg-danger">1</span>
                <img className="justify-content-center" src={"images/cart3.svg"} alt={"Carrito"} width={"24"} />
                <a className="nav-link" href="#">Mi Carrito</a>
            </button>
        </div>
    )

}

export default CartWidget