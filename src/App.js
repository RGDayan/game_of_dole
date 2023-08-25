import './App.css';
import React from 'react';
import Header from "./components/Header";
import PagePrincipale from "./components/page_principale/PagePrincipale";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import LaserGameInfo from "./components/page_principale/pages_info/LaserGameInfo";
import Contact from "./components/page_principale/Contact";


/**
 * Classe App : Construit la page web et contient les routes de redirections
 * @returns {JSX.Element} Page web construite en ReactJS
 * @constructor
 */
function App() {
    return (
        <div className={
            "flex flex-col " +
            "h-full "}>
            <Header />
            <Routes>
                <Route path={"/"} element={<PagePrincipale />}/>
                <Route path={"/laser-game"} element={<LaserGameInfo />}/>
                <Route path={"/chase-tag"} element={<PagePrincipale />}/>
                <Route path={"/vr"} element={<PagePrincipale />}/>
                <Route path={"/voice-mix"} element={<PagePrincipale />}/>
                <Route path={"/contact"} element={<Contact />}/>

            </Routes>
            <Footer />
        </div>
    );
}

export default App;
