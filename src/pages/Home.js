import React from 'react';
import Header from '../components/Header';
import ItemProductList from '../components/ItemProductList';
import '../styles/style-pages/home.css';

function Home(){
    return(
        <div className='container-general'>
            <div className='container-header'>
                <Header />
            </div>
            <div className='container-body'>
                <div className='list-product-desk'>
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
            <div className='container-footer'></div>
        </div>
    );
}


export default Home;