import React from "react";
import BodyCatalogoLivros from "../../components/BodyCatalogoLivros";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function CatalogoLivros() {
    return (
        <>
            <NavBar />
            <BodyCatalogoLivros />
            <Footer />
        </>
    );
}

export default CatalogoLivros;
