/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-light d-flex">
                <div className="container justify-content-around">
                    <div>
                        <Link className="p-3 " to={"/"}><img src={"https://i.postimg.cc/7hF2m6Gy/logo-arena.png"} alt="logo" width={62} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink className="nav-link " activateclassname="page" to={"/category/Mujer"} role="button" aria-expanded="false" >
                                    <b>MUJER</b>
                                </NavLink>                            
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " activateclassname="page" to={"/category/Hombre "} role="button"  aria-expanded="false">
                                    <b>HOMBRE</b>
                                </NavLink>
                                
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " activateclassname="page" to={"/category/Niños "} role="button"  aria-expanded="false">
                                    <b>NIÑOS</b>
                                </NavLink>                                
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " activateclassname="page" to={"/category/Equipamiento "} role="button"  aria-expanded="false">
                                    <b>EQUIPAMIENTO</b>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" activateclassname="page" to={"/category/Sale "}><b>SALE</b></NavLink>
                            </li>
                        </ul>
                        <ul className='navbar-nav p-3'>
                            <li className="nav-item d-flex ">
                                <button type="button" className="btn bg-light position-relative">
                                    <div className="justify-content-center">
                                        <svg height="24" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                    </div>
                                    <Link className="nav-link" to={" "}>Buscador</Link>
                                </button>
                            </li>
                            <li className="nav-item d-flex ">
                                <button type="button" className="btn bg-light position-relative">
                                    <div className="justify-content-center">
                                        <svg height="24" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                                        </svg>
                                    </div>
                                    <Link className="nav-link" to={" "}>Mi Cuenta</Link>
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
