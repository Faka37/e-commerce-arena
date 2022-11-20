/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='row p-3'>
                <div className="card col-6 p-3 border-0 " >
                    <div className='row'>
                        <div className='col'>
                            <h4>PRODUCTOS</h4>
                            <ul>
                                <li><a>Mujer</a></li>
                                <li><a>Hombre</a></li>
                                <li><a>Niños</a></li>
                                <li><a>Equipamiento</a></li>
                                <li><a>Sale</a></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h4>EMPRESA</h4>
                            <ul>
                                <li><a>Envios</a></li>
                                <li><a>Preguntas frecuentes</a></li>
                                <li><a>Términos y condiciones</a></li>
                                <li><a>Cambios y devoluciones</a></li>
                                <li><a>Boton de arrepentimiento</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h4>CONTACTO</h4>
                            <ul>
                                <li>
                                    <img className="m-1" src={'images/envelope.svg'} alt={'e-mail'} />
                                    arena@btshops.com.ar
                                </li>
                                <li>
                                    <img className="m-1" src={'images/geo-alt.svg'} alt={"geolocalizacion"} />
                                    Palermo
                                </li>
                            </ul>
                        </div>
                        <div className='col '>
                            <h4>SEGUINOS</h4>
                            <ul className="d-flex">
                                <li>
                                    <a target="_blank">
                                    <img className="m-1" src={'images/instagram.svg'} alt={'instagram'}  href="https://www.instagram.com/arena.arg" width={35} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank">
                                    <img className="m-1" src={'images/facebook.svg'} alt={"facebook"}  href="https://www.facebook.com/arena.arg/" width={35} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card col-6 p-3 border-0 bg-dark text-white p-5" >
                    <div className="col-9 justify-content-center">
                        <img className="w-75" src={'images/logo-footer.png'} alt={'Logo de footer'} />
                        <h3>SUSCRIBITE</h3>
                        <p>
                            Registrate gratis y descubrí beneficios exclusivos al ser miembro de Club arena.
                        </p>
                        <input className='p-2' placeholder='Email' />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center p-3'>
                Copyright Facundo Rodriguez - 2022. Todos los derechos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer
