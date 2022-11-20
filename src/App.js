import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Carrousel from "./components/Carrousel"
import Banner from "./components/Banner"
import Publicity from "./components/Publicity"
import Footer from "./components/Footer"
import "./index.css"

const App = () => {
    return (
        <div >
            <NavBar/>
            <ItemListContainer greeting={"Arena Argentina"}/>
            <Carrousel />
            <Banner />
            <Publicity />
            <Footer />
        </div>
    )
}

export default App