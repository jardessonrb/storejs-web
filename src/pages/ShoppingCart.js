import React from 'react';
import Header from '../components/Header';
import ItemListShoppingCart from '../components/ItemListShoppingCart';

import '../styles/style-pages/shopping-cart.css';

function ShoppingCart(){
    return(
        <div className='container-general'>
            <div className='container-header'>
                <Header />
            </div>
            <div className='container-body'>
                <div className='sale-progress'>
                    
                </div>
                <div class="content-main">
                    <div class="content-item">
                        <div className="top-shoppiing-cart">
                            <span className="atribute-top">Produtos</span>
                            <div className="group-atribute-top">
                                <span className="atribute-top">Preço</span>
                                <span className="atribute-top">Quantidade</span>
                                <span className="atribute-top">Total</span>
                            </div>
                        </div>
                        <div className="list-products-cart">
                            <ItemListShoppingCart />
                            <ItemListShoppingCart />
                            <ItemListShoppingCart />
                        </div>
                    </div>
                    <div className="sales-note">
                        <div className="sales-note-top">
                            <span className="title-top">Nota do carrinho</span>
                        </div>
                        <div className="content-sale-note">
                            <div className="content-one">
                                <span className="atribute-carrinho">Subtotal</span>
                                <span className="atribute-value-subtotal">R$ 22.50</span>
                            </div>
                            <div className="content-two">
                                <span className="atribute-carrinho">Entrega</span>
                                <div className="area-information-delivery">
                                    <span className="atribute-information-delivery">Selecione um local para entrega</span>
                                </div>
                            </div>
                            <div className="content-three">
                                <span className="atribute-carrinho">Total da compra</span>
                                <span className="atribute-value-total">R$ 22.50</span>
                            </div>
                            <div className="area-button">
                                <button className="button-default">Comprar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-footer'></div>
        </div>
    );
}


export default ShoppingCart;