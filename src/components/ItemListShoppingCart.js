import React from  'react';
import '../styles/style-components/item-list-shopping-cart.css';
import imageProduct from '../assets/po-banana.jpg';
import iconClose from '../assets/close.png';
import iconClose2 from '../assets/close2.svg';

function ItemListShoppingCart(){
    return(
        <div className='content-item-item'>
            <div  className='group-data-item'>
                <span className="icon-close-hover"><img className='icon-close' src={iconClose2} alt='icone de remover' /></span>
                <img className='image-product-miniature' src={imageProduct} alt='imagem do produto' />
                <span><a className='link-name-product' href='produto/po-banana'>Pó de Banana Super Top.</a></span>
            </div>
            <div className='price-amount-total'>
                <strong className='value-product-item'>R$ 7.50</strong>
                <div class="amount-interaction">
                    <div className='qnt-product'>
                        <span className="amount-span">1</span>
                    </div>
                    <div className="group-buttons">
                        <button className="button-amount-interaction">+</button>
                        <button className="button-amount-interaction">-</button>
                    </div>
                </div>
                <span className='total-product'>R$ 7.50 </span>
            </div>
        </div>
    );
}

export default ItemListShoppingCart;