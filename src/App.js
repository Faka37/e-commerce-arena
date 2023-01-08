import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Error from './components/Error404';
import Publicity from "./components/Publicity"
import Footer from "./components/Footer"
import "./index.css"
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path={'/'} element={<ItemListContainer />} />
                    <Route exact path={'/category/:id'} element={<ItemListContainer />} />
                    <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route exact path={"/cart"} element={<Cart />} />
                    <Route exact path={"/checkout"} element={<Checkout />} />
                    <Route path={'/*'} element={<Error />} />
                </Routes>
                <Publicity />
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App