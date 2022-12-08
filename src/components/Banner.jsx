/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Exclusive from "./Exclusive"

const Banner = () => {
    return (
        <div className="row">
            <div className="card col-6 p-3 border-0" >
                <Link >
                    <img src={"https://i.postimg.cc/K8nnpnDp/banner.webp"} className="card-img-top banners" alt={"Mujer"} />
                    <div className="card-body">
                        <h1 className="card-text">MUJER</h1>
                        <p>¿Maxlife? ¿Maxfit? ¿Espalda favorita? Elegí el traje de baño que se adapte a tu estilo.</p>
                    </div>
                </Link>
            </div>
            <div className="card col-6 p-3 border-0" >
                <Link >
                    <div className="card-body">
                        <h1 className="card-text">HOMBRE</h1>
                        <p>¿Jammers? ¿Shorts? ¿Tiro Bajo? Buscá tu máximo confort.</p>
                    </div>
                    <img src={"https://i.postimg.cc/k5qW0BjJ/banner-1.webp"} className="card-img-top banners" alt={"Hombre"} />
                </Link>
            </div>
            <Exclusive />
            <div className="card col-6 p-3 border-0" >
                <Link >
                    <img src={"https://i.postimg.cc/fLbmb1n1/banner-2.webp"} className="card-img-top banners" alt={"Antiparras"} />
                    <div className="card-body">
                        <h1 className="card-text">LO QUE VEMOS DEPENDE DE LO QUE BUSCAMOS</h1>
                        <p>En arena diseñamos antiparras para todos los perfiles faciales. ¿Cuál es el tuyo?</p>
                    </div>
                </Link>
            </div>
            <div className="card col-6 p-3 border-0" >
                <Link>
                    <div className="card-body">
                        <h1 className="card-text">BOLSOS</h1>
                        <p>Sabemos que tu jornada diaria combina trabajo, gym y pileta. Descubrí la mas amplia colección de mochilas y bolsos diseñados para una vida in and out of the water.</p>
                    </div>
                    <img src={"https://i.postimg.cc/W480TTKM/banner-3.webp"} className="card-img-top banners" alt={"Bolsos"} />
                </Link>
            </div>
        </div>
    )
}

export default Banner
