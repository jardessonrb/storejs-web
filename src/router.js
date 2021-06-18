import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';    
import Home from './pages/Home';
import SpecificProduct from './pages/SpecificProduct';
import ShoppingCart from './pages/ShoppingCart';
import PurchaseRegister from './pages/PurchaseRegister';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produto/po-banana" component={SpecificProduct} />
                <Route path="/carrinho" component={ShoppingCart} />
                <Route path="/registrar-compra" component={PurchaseRegister} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;