import React from  'react';
import '../styles/style-components/header.css';
import imageLogo from '../assets/image-default.png';
import imageSearch from '../assets/search2.png';
import imageHeart from '../assets/heart.png';
import imageShoppingCart from '../assets/shopping-cart.png';
import imageUserRegister from '../assets/user.png';
import logoStore from '../assets/logo.jpg';


function Header(){
    return(
        <div className='content-header'>
            <div className='content'>
                <div className='container-image-logo'>
                    <img className='image-logo' src={logoStore} alt='imagem de logo' />
                </div>
                <div className='content-search'>
                    <input className='input-search' placeholder='Digite o que deseja' />
                    <span><img className='icone-options' src={imageSearch} alt='icone de pesquisa' /></span>
                </div>
                <div className='container-content-options'>
                    <img className='icone-options' src={imageHeart} alt='icone de pesquisa' />
                    <img className='icone-options' src={imageUserRegister} alt='icone de pesquisa' />
                    <img className='icone-options' src={imageShoppingCart} alt='icone de pesquisa' />
                </div>
            </div>
            <div className='container-options-category'>
                <a className='link-category' href="#">Inicio</a>
                <a className='link-category' href="#">Categoria 1</a>
                <a className='link-category' href="#">Categoria 1</a>
                <a className='link-category' href="#">Categoria 1</a>
                <a className='link-category' href="#">Categoria 1</a>
                <a className='link-category' href="#">Categoria 1</a>
            </div>
        </div>
    );
}

export default Header;