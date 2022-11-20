import React from 'react'

const Publicity = () => {
    return (
        <div className="container  p-5 m-3">
            <a className="publicity-intagram" target={"_blank"} href="https://www.instagram.com/arena.arg /">
            <p className='d-flex '>
            <img className="m-2 mt-0" src='images/instagram.svg' alt='Icono de instagram' width={42}/>
            <span className="insta font-weight-bolder">arena.arg</span>
            </p>
            <p>Estamos en Instagram</p>
            <button className="btn btn btn-outline-secondary">SEGUINOS</button>
            </a>
        
        </div>
    )
}

export default Publicity