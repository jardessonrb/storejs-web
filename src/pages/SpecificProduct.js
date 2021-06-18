import React from 'react';
import Header from '../components/Header';
import ItemProductList from '../components/ItemProductList';
import '../styles/style-pages/specific-product.css';
import imageTempProduct from '../assets/po-banana.jpg';

function SpecificProduct(){
    return(
        <div className='container-general'>
            <div className='container-header'>
                <Header />
            </div>
            <div className='container-body'>
                <div className='container-content'>
                    <div className='image-miniature-product'>
                        <img className="image-miniature" src={imageTempProduct} alt="image em miniatura" />
                        <img className="image-miniature" src={imageTempProduct} alt="image em miniatura" />
                        <img className="image-miniature" src={imageTempProduct} alt="image em miniatura" />
                        <img className="image-miniature" src={imageTempProduct} alt="image em miniatura" />
                        <img className="image-miniature" src={imageTempProduct} alt="image em miniatura" />
                    </div>
                    <div className='container-image-main'>
                        <img className="image-size-normal" src={imageTempProduct} alt="image em miniatura" />
                    </div>
                    <div className="group-data-product">
                        <div className='datas-product'>
                            <strong className="name-product">Pó de banana</strong>
                            <strong className="value-product">R$ 7.50 </strong>
                            <span className="description-product">Pó de banana otimo para a pele muito bom emememememmem</span>
                            <span className="amount-product-stock">1 disponível p/ venda</span>
                        </div>
                        <div className="area-button">
                            <button className="button-default">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="informations-additional">
                    <div className="content-information">
                        <strong className="title-information">Informações Adicionais</strong>
                        <h3 className="description-additional-product">Pó de banana otimo para a pele</h3>
                        <h4 className="atribute-value"><strong className="atribute">Cor: </strong>Amarelo</h4>
                        <h4 className="atribute-value"><strong className="atribute">Peso: </strong>10 g</h4>
                    </div>
                </div>
                <div className="reference-and-category">
                    <span className="atribute-reference"><span className="value-reference">Referência: </span>01225455</span>
                    <span className="atribute-reference"><span className="value-reference">Categoria: </span>Maquiagem</span>
                </div>
                <div className="container-list-product-selected">
                    <h1 className="title">Produtos Relacionados</h1>
                    <div className='list-product-related'>
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                    
                        <ItemProductList />                  
                    </div>
                </div>
            </div>
            <div className='container-footer'></div>
        </div>
    );
}


export default SpecificProduct;