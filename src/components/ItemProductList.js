import React from  'react';
import '../styles/style-components/item-product-list.css';
import imageProduct from '../assets/po-banana.jpg';
import iconeHeartFavorite from '../assets/heart.png';
import iconeExpansion from '../assets/expasion.png';
import iconeHandbag from '../assets/handbag.png';




function ItemProductList(){
    return(
        <div className='container-specific-product'>
            <div className='group-image-icone'>
                <div className='container-image-product'>
                    <img className='image-product-specific' src={imageProduct} alt='imagem do produto' />
                </div>
                <div  className='options-modal-product'>
                    <img className='icone-actions-item' src={iconeHeartFavorite} alt='imagem do produto' />
                    <img className='icone-actions-item' src={iconeExpansion} alt='imagem do produto' />
                    <img className='icone-actions-item' src={iconeHandbag} alt='imagem do produto' />
                </div>
            </div>
            <div className='container-informations-product'>
                <strong className='name-product'>Pó de banana</strong>
                <span className='value-product'>R$ 7.50 </span>
            </div>
        </div>
    );
}

export default ItemProductList;