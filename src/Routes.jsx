import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import CatalogoLivros from './pages/CatalogoLivros';

export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/catalogo-livros">
                <CatalogoLivros />
            </Route>
            <Route exact path="/contato">
                <Contato />
            </Route>
        </Switch>
    );
}