/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-light d-flex">
                <div className="container justify-content-around">
                    <div>
                        <span className="p-3 "><img src={"images/logo-arena.png"} alt="logo" width={62} /></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>MUJER</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><b>TRAJES DE BAÑO</b></a></li>
                                    <li><a className="dropdown-item" href="#">ENTERIZAS</a></li>
                                    <li><a className="dropdown-item" href="#">BIKINIS</a></li>
                                    <li><a className="dropdown-item" href="#"><b>POWERSKIN</b></a></li>
                                    <li><a className="dropdown-item" href="#">CARBON GLIDE</a></li>
                                    <li><a className="dropdown-item" href="#">CARBON CORE FX</a></li>
                                    <li><a className="dropdown-item" href="#">CARBON AIR</a></li>
                                    <li><a className="dropdown-item" href="#">ST 2.0</a></li>
                                    <li><a className="dropdown-item" href="#">AGUAS ABIERTAS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>HOMBRE</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><b>TRAJES DE BAÑO</b></a></li>
                                    <li><a className="dropdown-item" href="#">SHORT TIRO BAJO</a></li>
                                    <li><a className="dropdown-item" href="#">SHORTS</a></li>
                                    <li><a className="dropdown-item" href="#">JAMMERS</a></li>
                                    <li><a className="dropdown-item" href="#">SLIPS</a></li>
                                    <li><a className="dropdown-item" href="#"><b>BEACH SHORTS</b></a></li>
                                    <li><a className="dropdown-item" href="#"><b>POWERSKIN</b></a></li>
                                    <li><a className="dropdown-item" href="#">CARBON GLIDE</a></li>
                                    <li><a className="dropdown-item" href="#">CARBON CORE FX</a></li>
                                    <li><a className="dropdown-item" href="#">CARBON AIR</a></li>
                                    <li><a className="dropdown-item" href="#">ST 2.0</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>NIÑOS</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><b>NIÑO</b></a></li>
                                    <li><a className="dropdown-item" href="#">TRAJES DE BAÑO</a></li>
                                    <li><a className="dropdown-item" href="#">| JAMMERS</a></li>
                                    <li><a className="dropdown-item" href="#">| SHORTS</a></li>
                                    <li><a className="dropdown-item" href="#"><b>NIÑA</b></a></li>
                                    <li><a className="dropdown-item" href="#">TRAJES DE BAÑO</a></li>
                                    <li><a className="dropdown-item" href="#">| ENTERIZAS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>EQUIPAMIENTO</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><b>ANTIPARRAS</b></a></li>
                                    <li><a className="dropdown-item" href="#">RACING</a></li>
                                    <li><a className="dropdown-item" href="#">TRAINING</a></li>
                                    <li><a className="dropdown-item" href="#">TRIATLON</a></li>
                                    <li><a className="dropdown-item" href="#">JUNIOR</a></li>
                                    <li><a className="dropdown-item" href="#">ESTUCHES</a></li>
                                    <li><a className="dropdown-item" href="#"><b>ACCESORIOS</b></a></li>
                                    <li><a className="dropdown-item" href="#">ALETAS</a></li>
                                    <li><a className="dropdown-item" href="#">SNORKELS</a></li>
                                    <li><a className="dropdown-item" href="#">MANOPLAS</a></li>
                                    <li><a className="dropdown-item" href="#">PULLBUOYS</a></li>
                                    <li><a className="dropdown-item" href="#">TOALLAS Y PONCHOS</a></li>
                                    <li><a className="dropdown-item" href="#">SHORT DE CARGA</a></li>
                                    <li><a className="dropdown-item" href="#">TABLAS</a></li>
                                    <li><a className="dropdown-item" href="#">VARIOS</a></li>
                                    <li><a className="dropdown-item" href="#"><b>GORRAS</b></a></li>
                                    <li><a className="dropdown-item" href="#">RACING</a></li>
                                    <li><a className="dropdown-item" href="#">TRAINING</a></li>
                                    <li><a className="dropdown-item" href="#">JUNIOR</a></li>
                                    <li><a className="dropdown-item" href="#">CASUAL</a></li>
                                    <li><a className="dropdown-item" href="#"><b>BOLSOS</b></a></li>
                                    <li><a className="dropdown-item" href="#">MOCHILAS</a></li>
                                    <li><a className="dropdown-item" href="#">BOLSAS</a></li>
                                    <li><a className="dropdown-item" href="#">BOLSOS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#"><b>SALE</b></a>
                            </li>
                        </ul>
                        <ul className='navbar-nav p-3'>
                            <li className="nav-item d-flex ">
                                <button type="button" className="btn bg-light position-relative">
                                    <img className="justify-content-center" src="images/search.svg" alt="Cuenta" width="24" />
                                    <a className="nav-link" href="#">Buscador</a>
                                </button>
                            </li>
                            <li className="nav-item d-flex ">
                                <button type="button" className="btn bg-light position-relative">
                                    <img className="justify-content-center" src="images/person.svg" alt="Cuenta" width="24" />
                                    <a className="nav-link" href="#">Mi Cuenta</a>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
