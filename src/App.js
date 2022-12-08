import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error404';
import Publicity from "./components/Publicity"
import Footer from "./components/Footer"
import "./index.css"

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path={'/'} element={<ItemListContainer />} />
                <Route exact path={'/category/:id'} element={<ItemListContainer />} />
                <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={'/*'} element={<Error />} />
            </Routes>
            <Publicity />
            <Footer />
        </BrowserRouter>
    )
}

export default App