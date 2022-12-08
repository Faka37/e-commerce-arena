/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='row p-3'>
                <div className="card col-6 p-3 border-0 " >
                    <div className='row'>
                        <div className='col'>
                            <h4>PRODUCTOS</h4>
                            <ul>
                                <li>
                                    <Link className="nav-link " activateclassname="page" to={"/category/Mujer"} role="button" aria-expanded="false">Mujer</Link>
                                </li>
                                <li>
                                    <Link className="nav-link " activateclassname="page" to={"/category/Hombre "} role="button" aria-expanded="false">Hombre</Link>
                                </li>
                                <li>
                                    <Link className="nav-link " activateclassname="page" to={"/category/Niños "} role="button" aria-expanded="false">Niños</Link>
                                </li>
                                <li>
                                    <Link className="nav-link " activateclassname="page" to={"/category/Equipamiento "} role="button" aria-expanded="false">Equipamiento</Link>
                                </li>
                                <li>
                                    <Link className="nav-link " aria-current="page" activateclassname="page" to={"/category/Sale "}>Sale</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col '>
                            <h4>EMPRESA</h4>
                            <ul >
                                <li ><Link className="text-black text-decoration-none">Envios</Link></li>
                                <li><Link className="text-black text-decoration-none" >Preguntas frecuentes</Link></li>
                                <li><Link className="text-black text-decoration-none" >Términos y condiciones</Link></li>
                                <li><Link className="text-black text-decoration-none" >Cambios y devoluciones</Link></li>
                                <li><Link className="text-black text-decoration-none" >Boton de arrepentimiento</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h4>CONTACTO</h4>
                            <ul>
                                <li>
                                    <div className="" >
                                        <svg height="20" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                                        </svg>

                                        <p>arena@btshops.com.ar</p>

                                    </div>
                                </li>
                                <li className=" ">
                                    <div className=" align-content-center" >
                                        <svg height="20" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                        </svg>
                                        <p>Palermo</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='col '>
                            <h4>SEGUINOS</h4>
                            <ul className="d-flex">
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/arena.arg" rel="noreferrer">
                                        <div className="m-1" >
                                            <svg height="35" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/arena.arg/' rel="noreferrer">
                                        <div className="m-1" >
                                            <svg height="35" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card col-6 p-3 border-0 bg-dark text-white p-5" >
                    <div className="col-9 justify-content-center">
                        <img className="w-75" src={'https://i.postimg.cc/xjhM0ssF/logo-footer.png'} alt={'Logo de footer'} />
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
